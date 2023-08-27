Instalar node: https://nodejs.org/dist/v18.17.1/node-v18.17.1-x64.msi

Em caso de não conseguir fazer clone / pull / push verificar se tem chave SSH associada ao git: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

Install node modules (/Server): npm install
Start server (/Server):  npx nodemon

to push to git (/SuperToe):
git add .
git commit -m"Descrição das alterações"
git push origin <branch>