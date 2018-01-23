# Pagar.me Magento 2

## Instalação

1. Clone o repositório
2. Suba os containers: `docker-compose up -d`
3. Registre o módulo: `docker-compose exec magento php bin/magento 
setup:upgrade`


## FAQ

**UnchaughtRuntimeExcetion:** Acontece devido as configurações de permissão 
do ambiente. Para atualizar o módulo dentro do container use: `docker-compose
 exec magento php bin/magento module:enable PagarMe_CreditCard --clear-static-content`