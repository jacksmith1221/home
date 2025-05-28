import os
import sys
sys.path.insert(0, os.path.abspath('.'))

project = 'Trézor'
copyright = '2023, Trézor'
author = 'Trézor'

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.napoleon',
    'sphinx_sitemap'
]

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']

# Sitemap configuration
html_baseurl = 'https://self-home.readthedocs.io/en/latest/'
sitemap_url_scheme = "{link}"