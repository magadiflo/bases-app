# Bases

- Fernando Herrera | Udemy | Angular de cero a experto | 2024
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

---

# Algunas características de Angular 18

---


## provideZoneChangeDetection({ eventCoalescing: true })

**RESUMEN**

> Según Jimy Dolores (LogiDev)
>
> A partir de `Angular 18` el team de Angular ha creado su propio detector de cambios de estado (`scheduler`). Hasta la versión de `Angular 17` podíamos decirle a nuestra aplicación que se base en `Zone.js`, es decir, que `Zone.js` sea el encargado de manejar la detección de cambios.
>
> Por defecto, cuando creamos una nueva aplicación de `Angular 18` nos lo crea con la opción `[provideZoneChangeDetection({ eventCoalescing: true })`

Cuando creamos un nuevo proyecto de `Angular 18`, por defecto nos crea dentro del archivo `app.config.ts` el `provideZoneChangeDetection({ eventCoalescing: true })`, tal como se muestra a continuación:

```typescript
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true })]
};
```

Sobre el  `provideZoneChangeDetection`. Proporciona detección de cambios basada en `NgZone` para la aplicación que se inició con `bootstrapApplication`.

`NgZone` ya se proporciona en las aplicaciones de forma predeterminada. Este proveedor le permite configurar opciones como `eventCoalescing` en `NgZone`. Este proveedor no está disponible para `platformBrowser().bootstrapModule`, que utiliza `BootstrapOptions` en su lugar.

Sobre el `eventCoalescing`. Opcionalmente, especifique si desea fusionar o no las detecciones de cambio de eventos. Considere el siguiente caso.

```html
<div (click)="doSomething()">
  <button (click)="doSomethingElse()"></button>
</div>
```

Cuando se hace clic en el botón, debido a la propagación de eventos, se llamarán ambos controladores de eventos y se activarán 2 detecciones de cambio. Podemos fusionar este tipo de eventos para que solo activen la detección de cambio una vez.

De manera predeterminada, esta opción será falsa. Por lo tanto, los eventos no se fusionarán y la detección de cambio se activará varias veces. Y si esta opción se establece en verdadera, la detección de cambio se activará de forma asincrónica programando un cuadro de animación. **Por lo tanto, en el caso anterior, la detección de cambio solo se activará una vez.**

El nuevo `Scheduler` (detector de cambios) de Angular, que es administrador por el `core de Angular`, se va a activar cuando:

- Eventos en el template o uso del HostListener.
- Se agrega o quita un template.
- El pipe Async recibe un nuevo valor.
- Llamado de la función `markForCheck` (formularios reactivos).
- El valor de una variable o signal cambia.

## provideZoneChangeDetection({ ignoreChangesOutsideZone: true })

**RESUMEN**

> Según Jimy Dolores (LogiDev)
>
> Supongamos que estamos en `Angular 18` y no queremos hacer uso del `scheduler` que ha creado el team de Angular, es decir, de su propio detector de cambios de estado; sino que queremos seguir manteniendo el proyecto con `Zone.js`, entonces debemos usar la opción `ignoreChangesOutsideZone: true`.

```typescript
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ ignoreChangesOutsideZone: true })]
};
```

Sobre el `ignoreChangesOutsideZone`, cuando es `falso`, la detección de cambios se programa cuando `Angular` recibe una indicación clara de que las plantillas deben actualizarse. Esto incluye:

- Llamar a ChangeDetectorRef.markForCheck
- Llamar a ComponentRef.setInput
- Actualizar una señal que se lee en una plantilla
- Cuando se activan los listeners de plantilla o host vinculados
- Adjuntar una vista que está marcada como dirty (sucia)
- Eliminar una vista
- Registrar un render hook (las plantillas solo se actualizan si los render hooks realizan una de las acciones anteriores)

## provideExperimentalZonelessChangeDetection()

**RESUMEN**

> Según Jimy Dolores (LogiDev)
>
> La aplicación que tengamos en `Angular 18` no usará para nada `Zone.js` y tampoco usará el propio `scheduler` creado por el team de Angular; sino que la detección de cambios estará administrada por la arquitectura de los `Signals`.


```typescript
export const appConfig: ApplicationConfig = {
  providers: [provideExperimentalZonelessChangeDetection()]
};
```

Sobre el `provideExperimentalZonelessChangeDetection`, proporciona detección de cambios `sin ZoneJS` para la aplicación que se inicia con `bootstrapApplication`.

Esta función le permite configurar la aplicación para `que no use los cambios de estado/estado de ZoneJS` para programar la detección de cambios en la aplicación. Esto funcionará cuando `ZoneJS` no esté presente en la página o si existe porque algo más lo está usando (ya sea otra aplicación Angular que usa ZoneJS para programar o alguna otra biblioteca que se basa en ZoneJS).

Esto también se puede agregar a los proveedores de TestBed para configurar el entorno de prueba para que coincida más estrechamente con el comportamiento de producción. Esto ayudará a tener una mayor confianza en que los componentes sean compatibles con la detección de cambios sin zonas.

`ZoneJS` usa eventos del navegador para activar la detección de cambios. Al usar este proveedor, `Angular` usará las API de Angular para programar la detección de cambios. Estas API incluyen:

- ChangeDetectorRef.markForCheck
- ComponentRef.setInput
- actualizar una señal que se lee en una plantilla
- cuando se activan los receptores de host o de plantilla enlazados
- adjuntar una vista que se marcó como dirty (sucia) por una de las opciones anteriores
- eliminar una vista
- registrar un render hook (las plantillas solo se actualizan si los ganchos de renderizado realizan una de las opciones anteriores)


