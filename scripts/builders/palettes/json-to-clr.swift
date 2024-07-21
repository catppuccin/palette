import AppKit
import Foundation

struct ColorProperties: Decodable {
  let hex: String
  let order: Int
}

typealias ColorList = [String: ColorProperties]

func hex2rgba(_ color: String) -> (r: CGFloat, g: CGFloat, b: CGFloat, a: CGFloat) {
  var hexColor = color
  if hexColor.hasPrefix("#") {
    hexColor.remove(at: hexColor.startIndex)
  }

  switch hexColor.count {
  case 3, 4:
    hexColor = hexColor.reduce("") { $0 + String(repeating: String($1), count: 2) }
    fallthrough
  case 6, 8:
    if hexColor.count == 6 {
      hexColor += "ff"
    }
    let r = CGFloat(Int(hexColor.prefix(2), radix: 16) ?? 0) / 255
    let g = CGFloat(Int(hexColor.dropFirst(2).prefix(2), radix: 16) ?? 0) / 255
    let b = CGFloat(Int(hexColor.dropFirst(4).prefix(2), radix: 16) ?? 0) / 255
    let a = CGFloat(Int(hexColor.dropFirst(6).prefix(2), radix: 16) ?? 0) / 255
    return (r, g, b, a)
  default:
    return (0, 0, 0, 0)
  }
}

func convertJSONToCLR(inputFilePath: String, outputFilePath: String) {
  let url = URL(fileURLWithPath: inputFilePath)
  guard let data = try? Data(contentsOf: url),
    let colorList = try? JSONDecoder().decode(ColorList.self, from: data)
  else {
    print("Failed to read or parse JSON file.")
    return
  }

  let sortedColors = colorList.sorted { (lhs, rhs) -> Bool in
    return lhs.value.order < rhs.value.order
  }

  let paletteName = url.deletingPathExtension().lastPathComponent
  let nsColorList = NSColorList(name: paletteName)

  for (name, properties) in sortedColors {
    let hex = properties.hex
    let color = hex2rgba(hex)
    nsColorList.setColor(
      NSColor(calibratedRed: color.r, green: color.g, blue: color.b, alpha: color.a), forKey: name)
  }

  let clrFilePath = URL(fileURLWithPath: outputFilePath)
  do {
    try nsColorList.write(to: clrFilePath)
    print("Successfully saved palette to \(outputFilePath).")
  } catch {
    print("Failed to save color palette: \(error)")
  }
}

if CommandLine.argc != 3 {
  print("Usage: swift ./json-to-clr.swift <INPUT> <OUTPUT>")
  exit(1)
}

let inputFilePath = CommandLine.arguments[1]
let outputFilePath = CommandLine.arguments[2]

convertJSONToCLR(inputFilePath: inputFilePath, outputFilePath: outputFilePath)
