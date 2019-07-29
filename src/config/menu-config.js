module.exports = [{
    name: '基本',
    id: 'basic',
    icon: 'flag',
    sub: [{
      name: 'JSON Render',
      componentName: 'JsonLoad',
      icon: 'file',
    },{
      name: 'ToDoList',
      componentName: 'ToDoList',
      icon: 'edit',
    }, {
      name: 'Table',
      componentName: 'Table',
      icon: 'coffee',
    },{
      name: '密碼強度',
      componentName: 'CheckPassword',
      icon: 'lock',
    },{
      name: 'Callback & Promise',
      componentName: 'callbackPromise',
      icon: 'star',
    }]
  }, {
    name: '其他',
    id: 'other',
    icon: 'star',
    sub: [{
      name: '作品集',
      componentName: 'Other1',
      icon: 'share',
    }, {
      name: 'Other2',
      componentName: 'Other2',
      icon: 'edit',
    }]
  }]