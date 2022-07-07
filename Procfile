web: gunicorn code_seonbi_main.wsgi:app --log-file - 
--log-level debug python 
manage.py collectstatic --noinput
manage.py migrate
