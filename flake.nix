{
  description = "Soothing pastel theme to use within your projects!";
  outputs = { self }: builtins.fromJSON (builtins.readFile ./palette-porcelain.json);
}
