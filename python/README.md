# catppuccin

🐍 Soothing pastel theme for Python.

## Usage

Install with `pip` or your preferred dependency management tool.

```bash
pip install catppuccin
```

## Example

```python
>>> from catppuccin import Flavour
>>> Flavour.latte().mauve.hex
'8839ef'
>>> Flavour.mocha().teal.rgb
(148, 226, 213)
```

`Flavour` is a [`dataclass`](https://docs.python.org/3/library/dataclasses.html),
so you can inspect its fields to get access to the full set of colour names and values:

```python
>>> from dataclasses import fields
>>> flavour = Flavour.frappe()
>>> for field in fields(flavour):
        colour = getattr(flavour, field.name)
        print(f"{field.name}: #{colour.hex}")
rosewater: #f2d5cf
flamingo: #eebebe
pink: #f4b8e4
...
base: #303446
mantle: #292c3c
crust: #232634
```

## Contribution

If you are looking to contribute, please read through our
[CONTRIBUTING.md](https://github.com/catppuccin/.github/blob/main/CONTRIBUTING.md)
first!

### Setup

This project is maintained with [Poetry](https://python-poetry.org). If you
don't have Poetry yet, you can install it using the [installation
instructions](https://python-poetry.org/docs/#installation).

Install the project's dependencies:

```bash
poetry install
```

### Code Standards

Before committing changes, it is recommended to run the follow tools to ensure
consistency in the codebase.

```bash
isort .
black .
pylint catppuccin.py
mypy .
pytest --cov
```

These tools are all installed as part of the `dev` dependency group with
Poetry. You can use `poetry shell` to automatically put these tools in your
path.

