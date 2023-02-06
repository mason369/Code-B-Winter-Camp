;(function(){

    var Student = function(name,age){
       this.name = name;
       this.age  = age;
    } ;
    
    Student.prototype.introduce = function(){
       return this.name + this.age
    } ;

    window.Student = Student;

})();