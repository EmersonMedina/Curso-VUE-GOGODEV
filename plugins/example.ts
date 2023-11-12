export default { 
    install: (app, options) => { 
        app.config.globalProperties.$globalVariableCount = () => 0,  
        app.config.globalProperties.$saySomething = () => alert(options.message)
    }
}