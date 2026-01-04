<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ config('app.name', 'MINI CRUD') }}</title>

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="{{ Vite::asset('resources/assets/logo.png') }}" />

    @env('local')
        <!-- Dev server: React Refresh + Assets -->
        @viteReactRefresh
        @vite([
            'resources/css/app.css', 
            'resources/js/main.jsx'
        ])
    @else
        <!-- Production: Load built CSS & JS -->
        @vite([
            'resources/css/app.css', 
            'resources/js/main.jsx'
        ])
    @endenv
</head>
<body class="bg-gray-100">
    <div id="app"></div>
</body>

</html>
