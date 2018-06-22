
#make the import section dry buy using an exporter 
#exporter will be the index.js file in the folder which basically export a group of components'

Example :

-layout
    -header.js
    -footer.js
    -index.js
-------------------------------------------------------------
  import header from './header'                              |
  import footer from './footer'                              |
                                                             |
   export {                                                  |
      header,footer                                          |
          }                                                  |
-------------------------------------------------------------
                                                           

