---
layout : "layouts/docs.njk"
title : "Laravel Facades"
description : ""
group : "tp-et-missions"
section : "missions"
toc : true
date : "2023-04-14T07:52:16+02:00"
draft : false
---
## 1 - Creating Custom Facades in Laravel 10
### STEP 1 - CREATE CLASS THAT WILL BE USED GLOBALLY
```php
namespace App\MyApp;
class MyApp {
    public function sayHello($data = [])
    {
        return "Hello World from Facade!";
    }
}
```
### STEP 2 - CREATE SERVICE PROVIDER CLASS
```bash
php artisan make:provider MyAppServiceProvider
```
Le service est créé dans le fichier `bootstrap/providers.php` 
### STEP 3 - ADD REGISTER METHOD TO SERVICE PROVIDER CLASS
Puis modifiez le fichier `app/Providers/MyAppServiceProvider.php`.

N'oubliez pas le deuxième use !
```php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\MyApp\MyApp;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton('myapp', function ($app) {
            return new MyApp();
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
```
### STEP 4 - CREATE FACADE CLASS
Create: App\Facades\MyApp.php  
```php
namespace App\Facades;
use Illuminate\Support\Facades\Facade;

class MyApp extends Facade{
    protected static function getFacadeAccessor() 
        { return 'myapp'; }
}
```
ADD ALIAS AND SERVICE PROVIDER TO config/app.php (version<11)
```php

//Add service provider
App\Providers\MyAppServiceProvider::class,

//Add alias
'MyApp' => App\Facades\MyApp::class
```
### Pour être sûre
```bash
composer dump-auto
```
### STEP 5 - TESTING
Test dans la route `routes/web`.
```php
use Illuminate\Support\Facades\Route;
use App\MyApp\MyApp;

Route::get('/', function () {
    return (new MyApp)->sayHello();
});
//Output: Hello World from Facade!
```

## 2 - Créer une autre Façade (version 10 non testé 11)
### STEP 1 - CREATE an Interface
```php
namespace App\Service;
class MyServiceAppInterface {
    public function sayHello($data = []);
}
```
### STEP 2 - CREATE CLASS THAT WILL BE USED GLOBALLY
```php
namespace App\Service;
class MyServiceApp {
    public function sayHello($data = [])
    {
        echo "Hello World from Facade!";
    }
}
```
### STEP 3 - CREATE SERVICE PROVIDER CLASS
```bash
php artisan make:provider 'MyAppServiceProvider'
```
### STEP 3 - ADD REGISTER METHOD TO SERVICE PROVIDER CLASS
```php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class MyAppServiceProvider extends ServiceProvider
{
    /**
    * Register the application services.
    *
    * @return void
    */
    public function register()
    {
        App::bind(
             'App\Service\MyServiceAppInterface',
             'App\Service\MyServiceApp'
            );
    }
```
{% callout danger %}
Pour la version `<11`
{% endcallout %}
```bash
composer create-project --prefer-dist laravel/laravel gsbLaravel
```