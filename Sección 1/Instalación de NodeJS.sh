#Actualizacion de repositorios de Ubuntu
sudo apt-get update && sudo apt-get upgrade

#Instalacion de paquetes requeridos
sudo apt-get install curl gnupg2 gnupg -y

#Actualizacion de repositorios de Ubuntu
sudo apt-get update && sudo apt-get upgrade

#Importacion del repositorio de NodeJS, activacion de la ventana de entorno creada por NVM (Node Version Manager) en la sesion del usuario
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.bashrc

#Se muestran las versiones disponibles de NodeJS (La lista que se muestra es extensa, la idea es instalar la version marcada con el tag Latest LTS)
nvm list-remote

#Se instala una version especifica de NodeJS (En este caso se instala la version 18.12.1, REEMPLAZA EL NUMERO DE VERSION PARA INDICAR LA VERSION QUE SE DESEA INSTALAR)
nvm install 18.12.1

#Se instala la version mas reciente LTS de NodeJS
nvm install --lts

#Se muestran las versiones de NodeJS instaladas
nvm ls

#Se indica una version especifica de NodeJS que se desea usar (Util cuando se tienen varias versiones de NodeJS instaladas)
nvm use 18.12.1

#Se indica la version mas reciente LTS de NodeJS que se desea usar (Util cuando se tienen varias versiones de NodeJS instaladas)
nvm use --lts

#Verificacion de instalacion a partir de la consulta de las versiones de NodeJS, NPM (Node Package Manager) y NVM (Node Version Manager)
node -v
npm version
nvm --version



#Se desinstala una version especifica de NodeJS (En este caso se desinstala la version 18.12.1, REEMPLAZA EL NUMERO DE VERSION PARA INDICAR LA VERSION QUE SE DESEA DESINSTALAR)
nvm uninstall 18.12.1

#Se desinstala la version mas reciente LTS de NodeJS
nvm uninstall --lts



#Desinstalacion de NodeJS
#sudo apt-get purge --auto-remove nodejs

#Eliminacion de archivos residuales de NodeJS y NPM (Node Package Manager)
#sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node* /usr/local/lib/dtrace/node.d ~/.npm ~/.node-gyp /opt/local/bin/node opt/local/include/node /opt/local/lib/node_modules
#sudo rm -rf /usr/local/lib/node*
#sudo rm -rf /usr/local/include/node*
#sudo rm -rf /usr/local/bin/node



#Referencias: https://es.linuxcapable.com/how-to-install-node-js-npm-on-ubuntu-22-04-lts/
#Referencias: https://es.quora.com/C%C3%B3mo-desinstalar-completamente-Node-js-y-reinstalar-la-%C3%BAltima-versi%C3%B3n-de-Node-js

