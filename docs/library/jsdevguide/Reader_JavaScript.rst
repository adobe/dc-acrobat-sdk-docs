******************************************************
JavaScript APIs
******************************************************

With Adobe Reader, JavaScript can be used for a number of tasks:

* To develop and process Acrobat forms and XML forms
* To customize the behavior and appearance of a PDF document
* To facilitate online team review
* To implement security policies
* To interact with web services
* To customize the behavior and appearance of Adobe Reader itself

.. note::

    The JavaScript debugger available in Acrobat is not normally available in Adobe Reader, though debug messages can be triggered to appear in the console. The complete debugger functionality can be enabled in Adobe Reader on Windows and Mac OS platforms.

Objects, properties, and methods
================================

On all supported platforms, JavaScript can be used for processing within a single document, processing for a given page within a document, and processing for a given form field.

The following table `JavaScript objects, properties, and methods available in Adobe Reader <Reader_JavaScript.html#80295>`__ contains a list of the JavaScript objects, properties, and methods that can be used with Adobe Reader.

.. note::

    Some of the objects listed below, such as those related to the console, debugger, media players, and text-to-speech, are not available for all platforms. Also, many properties and methods are only available within certain contexts and circumstances.

.. list-table:: JavaScript objects, properties, and methods available in Adobe Reader
   :widths: 10 40 50
   :header-rows: 1


   * - Object
     - Properties
     - Methods

   * - Alerter
     - 
     - dispatch 

   * - Alternate-Presentation
     - active, type
     - start, stop

   * - Annotation
     - alignment, AP, arrowBegin, arrowEnd, attachIcon, author, borderEffectIntensity, borderEffectStyle, callout, caretSymbol, contents, creationDate, dash, delay, doc, doCaption, fillColor, gestures, hidden, inReplyTo, intent, leaderExtend, leaderLength, lineEnding, lock, modDate, name, noteIcon, noView, opacity, page, point, points, popupOpen, popupRect, print, quads, rect, readOnly, refType, richContents, richDefaults, rotate, seqNum, soundIcon, state, stateModel, strokeColor, style, subject, textFont, textSize, toggleNoView, type, vertices, width
     - destroy, getProps, getStateInModel, setProps, transitionToState

   * - Annot3D
     - activated, context3D, innerRect, name, page, rect
     - 

   * - app
     - activeDocs, calculate, constants, focusRect, formsVersion, fromPDFConverters, fs, fullscreen, language, media, monitors, numPlugIns, openInPlace, platform, plugIns, printerNames, runtimeHighlight, runtimeHighlightColor, thermometer, toolbar, toolbarHorizontal, toolbarVertical, viewerType, viewerVariation, viewerVersion
     - addMenuItem, addSubMenu, addToolButton, alert, beep, beginPriv, browseForDoc, clearInterval, clearTimeOut, endPriv, execDialog, execMenuItem, getNthPlugInName, getPath, goBack, goForward, hideMenuItem, hideToolbarButton, launchURL, listMenuItems, listToolbarButtons, openDoc, popUpMenu, popUpMenuEx, removeToolButton, response, setInterval, setTimeOut, trustedFunction, trustPropagatorFunction

   * - app.media
     - align, canResize, closeReason, defaultVisible, ifOffScreen, layout, monitorType, openCode, over, pageEventNames, raiseCode, raiseSystem, renditionType, status, trace, version, windowType
     - addStockEvents, alertFileNotFound, alertSelectFailed, argsDWIM, canPlayOrAlert, computeFloatWinRect, constrainRectToScreen, createPlayer, getAltTextData, getAltTextSettings, getAnnotStockEvents, getAnnotTraceEvents, getPlayers, getPlayerStockEvents, getPlayerTraceEvents, getRenditionSettings, getURLData, getURLSettings, getWindowBorderSize, openPlayer, removeStockEvents, startPlayer

   * - Bookmark
     - children, doc, parent
     - execute

   * - Certificate
     - binary, issuerDN, keyUsage, MD5Hash, SHA1Hash, serialNumber, subjectCN, subjectDN, ubRights, usage
     - 

   * - Collab
     - 
     - addStateModel, documentToStream,, removeStateModel

   * - color
     - transparent, black, white, red, green, blue, cyan, magenta, yellow, dkGray, gray, ltGray
     - convert, equal

   * - Column
     - columnNum, name, type, typeName, value
     - 

   * - ColumnInfo
     - name, description, type, typeName
     - 

   * - console
     - 
     - clear, hide,, println,, show

   * - Data
     - creationDate, description, MIMEType, modDate, name, path, size
     - 

   * - Dialog
     - 
     - enable, end,, load,, store

   * - Directory
     - info
     - connect

   * - DirConnection
     - canList, canDoCustomSearch, canDoCustomUISearh, canDoStandardSearch, groups, name, uiName
     - search

   * - Document
     - alternatePresentations, author, baseURL, bookmarkRoot, calculate, creationDate, creator, dataObjects, delay, disclosed, docID, documentFileName, dynamicXFAForm, external, fileSize, hidden, hostContainer, icons, info, innerAppWindowRect, innerDocWindowRect, isModal, keywords, layout, media, modDate, mouseX, mouseY, noautocomplete, nocache, numFields, numPages, numTemplates, path, outerAppWindowRect, outerDocWindowRect, pageNum, pageWindowRect, permStatusReady, producer, requiresFullSave, securityHandler, selectedAnnots, sounds, spellDictionaryOrder, subject, templates, URL, viewState, xfa, XFAForeground, zoom, zoomType
     - addAnnot, addField, addIcon, bringToFront, calculateNow, closeDoc, createDataObject, deletePages, embedDocAsDataObject, exportAsFDF, exportAsFDFStr, exportAsText, exportAsXFDF, exportAsXFDFStr, exportDataObject, exportXFAData, getAnnot, getAnnot3D, getAnnots, getAnnots3D, getDataObject, getDataObjectContents, getField, getIcon, getLinks, getNthFieldName, getNthTemplate, getOCGs, getOCGOrder, getPageBox, getPageLabel, getPageNthWord, getPageNthWordQuads, getPageNumWords, getPageRotation, getPageTransition, getPrintParams, getSound, getTemplate, getURL, gotoNamedDest, importAnFDF, importAnXFDF, importDataObject, importIcon, importSound, importTextData, importXFAData, mailDoc, mailForm, openDataObject, print, removeDataObject, removeField, resetForm, saveAs, scroll, selectPageNthWord, setDataObjectContents, setPageAction, submitForm, syncAnnotScan

   * - Doc.media
     - canPlay
     - deleteRendition, getAnnot, getAnnots, getOpenPlayers, getRendition, newPlayer

   * - Embedded PDF
     - messageHandler
     - postMessage

   * - Error
     - fileName, lineNumber, extMessage, message, name
     - toString

   * - event
     - change, changeEx, commitKey, fieldFull, keyDown, modifier, name, rc, richChange, richChangeEx, richValue, selEnd, selStart, shift, source, target, targetName, type, value, willCommit
     - 

   * - Events
     - 
     - add, dispatch,, remove

   * - EventListener
     - 
     - afterBlur, afterClose,, afterDestroy,, afterDone,, afterError,, afterEscape,, afterEveryEvent,, afterFocus,, afterPause,, afterPlay,, afterReady,, afterScript,, afterSeek,, afterStatus,, afterStop,, onBlur,, onClose,, onDestroy,, onDone,, onError,, onEscape,, onEveryEvent,, onFocus,, onGetRect,, onPause,, onPlay,, onReady,, onScript,, onSeek,, onStatus,, onStop

   * - Field
     - alignment, borderStyle, buttonAlignX, buttonAlignY, buttonFitBounds, buttonPosition, buttonScaleHow, buttonScaleWhen, calcOrderIndex, charLimit, comb, commitOnSelChange, currentValueIndices, defaultStyle, defaultValue, doNotScroll, doNotSpellCheck, delay, display, doc, editable, exportValues, fileSelect, fillColor, hidden, highlight, lineWidth, multiline, multipleSelection, name, numItems, page, password, print, radiosInUnison, readonly, rect, required, richText, richValue, strokeColor, style, submitName, textColor, textFont, textSize, type, userName, value, valueAsString
     - browseForFileToSubmit, buttonGetCaption, buttonGetIcon, buttonSetCaption, buttonSetIcon, checkThisBox, clearItems, defaultIsChecked, deleteItemAt, getArray, getItemAt, getLock, insertItemAt, isBoxChecked, isDefaultChecked, setFocus, setItems, signatureGetModifications, signatureGetSeedValue, signatureInfo, signatureSign, signatureValidate

   * - FullScreen
     - backgroundColor, clickAdvances, cursor, defaultTransition, escapeExits, isFullScreen, loop, timeDelay, transitions, usePageTiming, useTimer
     - 

   * - Global
     - 
     - setPersistent, subscribe

   * - HostContainer
     - messageHandler
     - postMessage

   * - Icon
     - name
     - 

   * - Icon Stream
     - read, width, height
     - 

   * - Identity
     - corporation, email, loginName, name
     - 

   * - Index
     - available, name, path, selected
     - 

   * - Marker
     - frame, index, name, time
     - 

   * - Markers
     - player
     - get

   * - MediaOffset
     - frame, marker, time
     - 

   * - MediaPlayer
     - annot, defaultSize, doc, events, hasFocus, id, innerRect, isOpen, isPlaying, markers, outerRect, page, settings, uiSize, visible
     - close, open, pause, play, seek, setFocus, stop, triggerGetRect, where

   * - MediaReject
     - rendition
     - 

   * - MediaSelection
     - selectContext, players, rejects, rendition
     - 

   * - MediaSettings
     - autoPlay, baseURL, bgColor, bgOpacity, data, duration, endAt, floating, layout, monitor, monitorType, page, palindrome, players, rate, repeat, showUI, startAt, visible, volume, windowType
     - 

   * - Monitor
     - colorDepth, isPrimary, rect, workRect
     - 

   * - Monitors
     - (Same as Array)
     - bestColor, bestFit, desktop, document, filter, largest, leastOverlap, mostOverlap, nonDocument, primary, secondary, select, tallest, widest

   * - OCG
     - constants, initState, locked, name, state
     - getIntent, setAction

   * - PlayerInfo
     - id, mimeTypes, name, version
     - canPlay, canUseData, honors

   * - PlayerInfoList
     - (Same as Array)
     - select

   * - PlugIn
     - certfied, loaded, name, path, version
     - 

   * - PrintParams
     - binaryOK, constants, downloadFarEastFonts, fileName, firstPage, flags, fontPolicy, interactive, lastPage, nUpAutoRotate, nUpNumPagesH, nUpNumPagesV, nUpPageBorder, nUpPageOrder, pageHandling, pageSubset, printAsImage, printContent, printerName, psLevel, reversePages, usePrinterCRD, useT1Conversion
     - 

   * - RDN
     - c, cn, o, ou, e
     - 

   * - Rendition
     - altText, doc, fileName, type, uiName
     - getPlaySettings, select, testCriteria

   * - Row
     - columnArray
     - 

   * - ScreenAnnot
     - altText, alwaysShowFocus, display, doc, events, extFocusRect, innerDeviceRect, noTrigger, outerDeviceRect, page, player, rect
     - hasFocus, setFocus

   * - Search
     - attachments, available, bookmarks, docInfo, docText, docXMP, ignoreAccents, ignoreAsianCharacterWidth, indexes, jpegExif, legacySearch, markup, matchCase, matchWholeWord, maxDocs, objectMetadata, proximity, proximityRange, refine, soundex, stem, thesaurus, wordMatching
     - addIndex, getIndexForPath, query, removeIndex

   * - Security
     - handlers
     - getHandler

   * - SecurityHandler
     - appearances, digitalIDs, directories, directoryHandlers, isLoggedIn, loginName, loginPath, name, signAuthor, signFDF, signInvisible, signValidate, signVisible, uiName
     - login, logout, newDirectory

   * - SignatureInfo
     - (see the ` Javascript API Reference <https://www.adobe.com/go/acrobatsdk_jsapiref>`__ for a detailed description of the properties)
     - 

   * - SOAP
     - wiredump
     - connect, queryServices, resolveService, request, response, streamDecode, streamDigest, streamEncode, streamFromString, stringFromStream

   * - Sound
     - name
     - play, pause, stop

   * - Span
     - alignment, fontFamily, fontStretch, fontStyle, fontWeight, strikethrough, subscript, superscript, text, textColor, textSize, underline
     - 

   * - Spell
     - available, dictionaryNames, dictionaryOrder, domainNames, languages, languageOrder
     - addWord, check, checkText, checkWord, customDictionaryClose, customDictionaryOpen, ignoreAll, removeWord, userWords

   * - Template
     - hidden, name
     - spawn

   * - Thermometer
     - cancelled, duration, text, value
     - begin, end

   * - TTS
     - available, numSpeakers, pitch, soundCues, speaker, speechCues, speechRate, volume
     - getNthSpeakerName, pause, qSilence, qSound, qText, reset, resume, stop, talk

   * - util
     - 
     - crackURL, iconStreamFromIcon,, printd,, printf,, printx,, scand,, spansToXML,, streamFromString,, stringFromStream,, xmlToSpans

   * - XFA
     - Corresponds to the appModel container.
     - Corresponds to the appModel container.

   * - XMLData
     - 
     - applyXPath, parse



