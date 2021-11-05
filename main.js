let ifElse = new Vue({
    el: '#ifElse',
    data: {

        users: [
            {
                login: 'toma',
                password: '123'
            },
            {
                login: 'petya',
                password: '777'
            },
            {
                login: 'olya',
                password: '456'
            },
        ],
        numberFlat: '',
        LoginIfElse2: '',
        PasswordIfElse2: '',
        AgeIfElse3: '',
        standingIfElse: ''
    },
    methods: {
        //ifelse 1
        Porch: function () {
            if (this.flatNumber.trim() == '') {
                alert('Введите номер квартиры');
                this.flatNumber = '';
            } else if (Number(this.flatNumber.trim()) > 90 || Number(this.flatNumber.trim()) < 1) {
                alert('Такой квартиры нет');
                this.flatNumber = '';
            } else if (Number(this.flatNumber.trim()) <= 20) {
                alert('Ваш подъезд 1');
                this.flatNumber = '';
            } else if (Number(this.flatNumber.trim()) <= 48) {
                alert('Ваш подъезд 2');
                this.flatNumber = '';
            } else if (Number(this.flatNumber.trim()) <= 90) {
                alert('Ваш подъезд 3');
                this.flatNumber = '';
            }
        },
        //ifelse 2
        authorize: function () {
            let i = 0;
            while (this.users[i]) {
                if (this.LoginIfElse2.trim() == this.users[i].login && this.PasswordIfElse2.trim() == this.users[i].password) {
                    alert(`Добро пожаловать`);
                    break;
                }
                i++;
            }

            if (!this.users[i]) {
                alert('Ошибка входа');
            }
        },
        //ifelse 3
        ageCheck: function () {
            if (2021 - this.AgeIfElse3 <= 2021 - 16) {
                alert(`Добро пожаловать!`);
            } else {
                alert(`Вход воспрещён`);
            }
        },
        //ifelse 4
        standingCheck: function () {
            if (this.standingIfElse.trim() == '') {
                alert('Укажите стаж работы')
            } else if (this.standingIfElse.trim() < 0) {
                alert('Укажите верный формат');
            } else if (this.standingIfElse.trim() < 3) {
                alert('Ваша надбавка составляет 0%');
            } else if (this.standingIfElse.trim() < 10) {
                alert('Ваша надбавка составляет 10%');
            } else if (this.standingIfElse.trim() < 20) {
                alert('Ваша надбавка составляет 20%');
            } else if (this.standingIfElse.trim() > 20) {
                alert('Ваша надбавка составляет 25%');
            }
        }
    }
});

//cycles
document.addEventListener('DOMContentLoaded', function () {
    const cycleFirst = document.querySelector(".cycle-first");
    const cycleSecond = document.querySelector(".cycle-second");
    const cycleThird = document.querySelector(".cycle-third");
    const cycleFourth = document.querySelector(".cycle-fourth");
    const cycleFifth = document.querySelector(".cycle-fifth");

    //1
    function Task1() {
        let step = 0;
        for (step = 4; step <= 400; step++) {
            console.log(step);
        }
    }

    cycleFirst.addEventListener('click', function () {
        Task1();
    });

    //2
    function Task2() {
        let second = 1;
        for (step = 0; step < 4; step++) {
            second = second + 3;
            console.log(second);
        }

    }

    cycleSecond.addEventListener('click', function () {
        Task2();
    });

    //3
    function Task3() {
        for (step = 654; step >= 0; step--) {
            console.log(step);
        }

    }

    cycleThird.addEventListener('click', function () {
        Task3();
    });

    //4
    function Task4() {
        for (step = 1983; step <= 2017; step++) {
            console.log(step + ' year');
        }

    }

    cycleFourth.addEventListener('click', function () {
        Task4();
    });

    //5
    function Task5() {
        for (step = -4; step <= 100; step += 2) {
            console.log(step);
        }

    }

    cycleFifth.addEventListener('click', function () {
        Task5();
    });
});


