!include "MUI2.nsh"

Section "Section"
  SetOutPath "$INSTDIR"
  File "C:\%ProgramFiles%\Logger\"
  SetShellVarContext all
  StrCpy $INSTDIR "$PROGRAMFILES\Logger"
  CreateDirectory "$INSTDIR"
  MessageBox MB_YESNO "Instalar en $INSTDIR?" IDOK "Continuar" IDCANCEL "Cancelar"
  IfMsgBox $IDOK
    ; Instalar la aplicación en la ruta seleccionada
  Else
    ; Cancelar la instalación
  EndIf
SectionEnd

Section "PostInstall"
  ; Registrar la aplicación en el sistema
  ; Crear accesos directos
SectionEnd
