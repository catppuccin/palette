import AppKit
import Foundation

struct ColorProperties: Decodable {
  let hex: String
  let order: Int
}

typealias ColorList = [String: ColorProperties]

func hexToRGBA(_ color: String) -> (r: CGFloat, g: CGFloat, b: CGFloat) {
  var hexColor = String(color.dropFirst())

  let r = CGFloat(Int(hexColor.prefix(2), radix: 16) ?? 0) / 255
  let g = CGFloat(Int(hexColor.dropFirst(2).prefix(2), radix: 16) ?? 0) / 255
  let b = CGFloat(Int(hexColor.dropFirst(4).prefix(2), radix: 16) ?? 0) / 255
  return (r, g, b)
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
    let color = hexToRGBA(hex)
    nsColorList.setColor(
      NSColor(red: color.r, green: color.g, blue: color.b, alpha: 1), forKey: name)
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
  print("Not enough arguments provided")
  exit(1)
}

let inputFilePath = CommandLine.arguments[1]
let outputFilePath = CommandLine.arguments[2]

convertJSONToCLR(inputFilePath: inputFilePath, outputFilePath: outputFilePath)
