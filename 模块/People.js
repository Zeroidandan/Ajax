function People(name, age) {
    this.name = name;
    this.age = age;
}

People.prototype.singing = function () {
    console.log(`小冤家${this.name}在干嘛，像个傻瓜`);
}

module.exports = People;