{pkgs ? import <nixpkgs> {}}:
pkgs.mkShell {
  buildInputs = [pkgs.deno pkgs.nodejs];
}
