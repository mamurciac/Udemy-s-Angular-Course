#Actualizacion de repositorios de Ubuntu
sudo apt-get update && sudo apt-get upgrade

#Instalacion de paquetes requeridos
sudo apt-get install wget

#Descarga de la version mas estable de Google Chrome
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

#Instalacion de Google Chrome
sudo dpkg -i google-chrome-stable_current_amd64.deb

#Para tener Google Chrome como navegador web predeterminado, abre Aplicaciones Predeterminadas y en la opción de Web selecciona Google Chrome
