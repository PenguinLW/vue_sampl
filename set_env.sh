#in venv
. venv/bin/activate &&. nenv/bin/activate
npm install vue@next
npm install -D @vue/compiler-sfc
npm install -g @vue/cli
##vue upgrade --next
npm fund

npm init vite@latest vue_sampl -- --template vue #npm init vite@latest vue_sampl --template vue

cd vue_sampl
npm install
npm run dev -- --host
#deactivate
#deactivate_node
