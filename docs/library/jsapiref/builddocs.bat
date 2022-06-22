@echo

set root=..\..\..\docs\library\jsapiref\


cd %output%
:: Build html docs
sphinx-build -b html -d %root%\doctrees\ -a . %root%
rmdir /s /q %root%_sources\
rmdir /s /q %root%_static\
rmdir /s /q %root%doctrees\
del /s /q %root%.buildinfo
del /s /q %root%objects.inv

