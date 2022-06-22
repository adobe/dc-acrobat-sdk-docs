import os
import sys

extensions = [
    'sphinx.ext.autosectionlabel'
    ]

# The suffix of source filenames.
source_suffix = '.rst'

# The master toctree document.
master_doc = 'toc'

# General information about the project.
project = u'Acrobat and PDFL SDK: JS API Reference'
copyright = u'2022, Adobe Inc.'

# The name of the Pygments (syntax highlighting) style to use.
pygments_style = 'sphinx'

# -- Options for HTML output ---------------------------------------------------

templates_path = ['..\..\_rtdtemplates']

html_theme = 'sphinx_rtd_theme'

# override the default css
html_context = {
    'css_files': [
        '../../_static/theme_overrides.css',  
        ],
     }
     
# Theme options are theme-specific and customize the look and feel of a theme
# further.  For a list of options available for each theme, see the documentation.

html_theme_options = {
    'canonical_url': 'https://www.adobe.com/go/acrobatsdk_home',
    'logo_only': False,
    'display_version': False,
    'prev_next_buttons_location': 'top',
    'style_external_links': False,
    'style_nav_header_background': '',
    # Toc options
    'collapse_navigation': False,
    'sticky_navigation': True,
    'navigation_depth': 4,
    'includehidden': True,
    'titles_only': False
}

# The name for this set of Sphinx documents.  If None, it defaults to
# "<project> v<release> documentation".
html_title = "Acrobat and PDFL SDK: JS API Reference"

# A shorter title for the navigation bar.  Default is the same as html_title.
# maps to shorttitle|e
html_short_title = "Acrobat and PDFL SDK: JS API Reference"

# The name of an image file (relative to this directory) to place at the top
# of the sidebar.
#html_logo = "logo.png"

# Output file base name for HTML help builder.
htmlhelp_basename = 'Admin'

# The name of an image file (within the static path) to use as favicon of the
# docs.  This file should be a Windows icon file (.ico) being 16x16 or 32x32
# pixels large.
html_favicon = 'favicon.ico'

# If not '', a 'Last updated on:' timestamp is inserted at every page bottom,
# using the given strftime format.
html_last_updated_fmt = '%b %d, %Y'


# If false, no index is generated.
html_use_index = False

# If true, the index is split into individual pages for each letter.
#html_split_index = False

# Changes has_source value in HTML output. 
html_copy_source = False

# If true, links to the reST sources are added to the pages.
html_show_sourcelink = False

# If true, "Created using Sphinx" is shown in the HTML footer. Default is True.
html_show_sphinx = False

# If true, "(C) Copyright ..." is shown in the HTML footer. Default is True.
html_show_copyright = True

# If set, autosectionlabel chooses the sections for labeling by its depth. For example, when set 1 to autosectionlabel_maxdepth, labels are generated only for top level sections, and deeper sections are not labeled. It defaults to None (disabled).
autosectionlabel_prefix_document = True

# True to prefix each section label with the name of the document it is in, followed by a colon. For example, index:Introduction for a section called Introduction that appears in document index.rst. Useful for avoiding ambiguity when the same section heading appears in different documents.
autosectionlabel_maxdepth = 2

##################### Latex config ################################

# see https://www.sphinx-doc.org/en/master/latex.html
latex_engine = 'xelatex'

# this doesn't work yet:  latex_documents = ('index.rst', 'Adobe_Acrobat_Wizard_Manual.tex', u'titleinheader', u'BenRogersauthor', 'manual', False),

latex_maketitle = r'''
    \begin{titlepage}
        \begin{figure}[h]
        \centering{\includegraphics[scale=1.5]{../images/adobelogo.png}}
        \end{figure}
        \centering
        \vspace*{40mm}
        \textbf{\Huge Acrobat and PDFL SDK: JS API Reference}

        \vspace{15mm}
        \Large \textbf{{This PDF is programmatically generated: Review copy only}}
        \vfill
        \small \textcopyright\ 2022, Adobe Inc.
    \end{titlepage}
    \clearpage
    \tableofcontents
    \clearpage
    '''
latex_elements = {
    'papersize': 'letterpaper',
    'printindex': '\\printindex',
    'extraclassoptions': 'openany,oneside',
    'pointsize': '12pt',
    # 'fncychap': '\\usepackage[Lenny]{fncychap}', # https://texblog.org/2012/07/03/fancy-latex-chapter-styles/
    # latex font packages are in ???????????????????? see https://tex.stackexchange.com/questions/59403/what-font-packages-are-installed-in-tex-live
    # 'fontpkg': '\\usepackage{bookman}',
    'maketitle': latex_maketitle,
    'tableofcontents': '',
    'preamble': '''\
        \\usepackage{tocloft}
        \\usepackage{tabularx}
        \\usepackage{titlesec}
        \\usepackage{titling}
        \\usepackage{fancyhdr}
        \\pagestyle{fancy}
        \\usepackage{graphicx}
        \\usepackage{fontspec}
        \\setmainfont{AdobeClean-Regular}
        \\makeatletter
    \\fancypagestyle{normal}{
        \\fancyhf{}
        \\fancyfoot[LE,RO]{{\\py@HeaderFamily\\thepage}}
        \\fancyfoot[LO,RE]{{\\textcopyright\\ 2021, Adobe Inc.}}
        \\fancyhead[LE,RO]{{\\py@HeaderFamily \\@title\\sphinxheadercomma\\py@release}}
        \\renewcommand{\\headrulewidth}{0pt}
        \\renewcommand{\\footrulewidth}{0.4pt}
    }
    \\fancypagestyle{plain}{
        \\fancyhf{}
        \\fancyfoot[LE,RO]{{\\py@HeaderFamily\\thepage}}
        \\renewcommand{\\headrulewidth}{0pt}
        \\renewcommand{\\footrulewidth}{0.4pt}
        \\fancyfoot[LO,RE]{{\\textcopyright\ 2021, Adobe Inc.}}
    }
\\makeatother
    '''
}