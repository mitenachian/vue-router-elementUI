module.exports = [{
    name: '基本',
    id: 'basic',
    icon: 'flag',
    sub: [{
      name: '密碼強度',
      componentName: 'CheckPassword',
      icon: 'lock',
    }, {
      name: 'JSON Render',
      componentName: 'JsonLoad',
      icon: 'file',
    }]
  }, {
    name: '產品',
    id: 'products',
    icon: 'beer',
    sub: [{
      name: 'ToDoList',
      componentName: 'ToDoList',
      icon: 'edit',
    }, {
      name: 'Table',
      componentName: 'Table',
      icon: 'coffee',
    }]
  }, {
    name: '其他',
    id: 'other',
    icon: 'star',
    sub: [{
      name: 'Other1',
      componentName: 'Other1',
      icon: 'share',
    }, {
      name: 'Other2',
      componentName: 'Other2',
      icon: 'edit',
    }]
  }]