# Проблемы
Контракты успешно компилируются. Однако размер контрактов превышает 24КБ, по данной причине при выполнении компанды truffle migrate не удается разместить контракты в блокчейне. BFactory взят из оригинального репозитория Balancer, но и он также превышает размер. Не ясно, каким способом авторы balancer размещали их контракты.

# Улучшения
Заменить в контракте Market import PoolManager на простой интерфейс PoolManager, чтобы уменьшить размер контракта.

# Комментарии
В остальном проблем не обнаружено, контракт должен работать правильно.
