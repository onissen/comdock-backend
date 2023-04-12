export default {
  register(app) {
    // app.addMenuLink({
    //   to: `/plugins/${pluginId}`,
    //   icon: PluginIcon,
    //   intlLabel: {
    //     id: `${pluginId}.plugin.name`,
    //     defaultMessage: name,
    //   },
    //   Component: async () => {
    //     const component = await import(/* webpackChunkName: "[request]" */ './pages/App');

    //     return component;
    //   },
    //   permissions: [
    //     // Uncomment to set the permissions of the plugin here
    //     // {
    //     //   action: '', // the action name should be plugin::plugin-name.actionType
    //     //   subject: null,
    //     // },
    //   ],
    // });

    // app.registerPlugin({
    //   id: pluginId,
    //   initializer: Initializer,
    //   isReady: false,
    //   name,
    // });
    app.customFields.register({
      name: "calcAddress",
      pluginId: "calc-field-address",
      type: "string",
      intlLabel: {
        id: "calc-field-address.address.label",
        defaultMessage: "address",
      },
      components: {
        Input: async () => import(/* webpackChunkName: "input-component" */ "./Input"),
      },
    });
  },

  // bootstrap(app) {},
  // async registerTrads({ locales }) {
  //   const importedTrads = await Promise.all(
  //     locales.map((locale) => {
  //       return import(
  //         /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
  //       )
  //         .then(({ default: data }) => {
  //           return {
  //             data: prefixPluginTranslations(data, pluginId),
  //             locale,
  //           };
  //         })
  //         .catch(() => {
  //           return {
  //             data: {},
  //             locale,
  //           };
  //         });
  //     })
  //   );

  //   return Promise.resolve(importedTrads);
  // },
};
