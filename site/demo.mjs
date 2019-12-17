export default {
  MglMap: {
    category: 'Components',
    type: 'Map',
    title: 'MglMap',
    subtitle: '',
  },

  MglComponentMixin: {
    category: 'Components',
    type: 'Map',
    title: 'MglComponentMixin',
    subtitle: '',
  },

  ...[
    'MglControlGroup',
    'MglNavigationControl',
    'MglGeolocateControl',
    'MglAttributionControl',
    'MglScaleControl',
    'MglFullscreenControl',
  ].reduce((obj, k) => {
    obj[k] = {
      category: 'Components',
      type: 'Control',
      title: k,
      subtitle: '',
    }
    return obj
  }, {}),

  ...['MglCustomControl', 'MglPitchControl', 'MglFlyToControl'].reduce((obj, k) => {
    obj[k] = {
      category: 'Components',
      type: 'Custom Control',
      title: k,
      subtitle: '',
    }
    return obj
  }, {}),

  ...['MglMarker', 'MglPopup'].reduce((obj, k) => {
    obj[k] = {
      category: 'Components',
      type: 'UI',
      title: k,
      subtitle: '',
    }
    return obj
  }, {}),

  ...['MglSource', 'MglLayer'].reduce((obj, k) => {
    obj[k] = {
      category: 'Components',
      type: 'Source & Layer',
      title: k,
      subtitle: '',
    }
    return obj
  }, {}),

  ...['MglVideoLayer', 'MglImageLayer', 'MglRasterLayer', 'MglPolygon'].reduce((obj, k) => {
    obj[k] = {
      category: 'Components',
      type: 'Compisiton Layer',
      title: k,
      subtitle: '',
    }
    return obj
  }, {}),
}
