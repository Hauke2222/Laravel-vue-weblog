@component('mail::message')
# Beste lezer,

Klik op de knop hieronder om de nieuwe blog berichten te zien.

@component('mail::button', ['url' => 'http://127.0.0.1:8000/#/'])
Bekijk de nieuwe blog berichten
@endcomponent

Bedankt,<br>
{{ config('app.name') }}
@endcomponent
