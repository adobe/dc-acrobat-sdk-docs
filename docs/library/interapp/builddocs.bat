@echo

set root=..\..\..\docs\library\interapp\
set latexfiles=.\pdf\

::::::::::::: Make HTML

cd %output%
:: Build html docs
sphinx-build -b html -d %root%\doctrees\ -a . %root%
:: rmdir /s /q %root%_sources\
rmdir /s /q %root%doctrees\
del /s /q %root%.buildinfo
del /s /q %root%objects.inv

:: Build PDF
sphinx-build -P -b latex -d %latexfiles% -a . %latexfiles%

cd .\pdf\
start make

cd ..