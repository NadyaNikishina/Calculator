let months = 1;
let sum = 100000;

// Расчёты по формуле для вкладов с ежемесячной капитализацией

function calculateProfit() {

let profitLeft = document.querySelector('.profit-left');
let profitRight = document.querySelector('.profit-right');
let interestRate = 0.065;
let columnLeftHeight = document.querySelector('.columns__2');

// Расчёты и изменение суммы в правой части страницы
    
let profitCountLeft = Math.round(Math.pow(1+interestRate/12, months)*sum);
profitLeft.innerHTML = profitCountLeft.toLocaleString();
    
let conserv = document.getElementById('radio-concerv');
let balance = document.getElementById('radio-balance');
let risk = document.getElementById('radio-risk');
let percent = document.querySelector('.change-percent');
    
    if (conserv.checked) {
       interestRate = 0.09;
        percent.innerHTML = 9;
    } 
    
    if (balance.checked) {
        interestRate = 0.18;
        percent.innerHTML = 18;
    }
    
    if (risk.checked) {
        interestRate = 0.25;
        percent.innerHTML = 25;
    }
    
// Расчёты и изменение суммы в правой части страницы
    
let profitCountRight = Math.round(Math.pow(1+interestRate/12, months)*sum);
profitRight.innerHTML = profitCountRight.toLocaleString();
    
let sectionLeft = document.querySelector('.section-left');
let columnLeft = document.querySelector('.columns__change-left');
let columnRight = document.querySelector('.columns__change-right');
    
    // Информация на странице обновляется при клике на radio
    sectionLeft.addEventListener( "click" , function() {
    
    if (conserv.checked) {
       interestRate = 0.09;
        percent.innerHTML = 9;
    } 
    
    if (balance.checked) {
        interestRate = 0.18;
        percent.innerHTML = 18;
    }
    
    if (risk.checked) {
        interestRate = 0.25;
        percent.innerHTML = 25;
    }
        
    profitCountRight = Math.round(Math.pow(1+interestRate/12, months)*sum);
    profitRight.innerHTML = profitCountRight.toLocaleString();
        
    // Изменение высоты столбцов 
        
    columnLeft.style.height = Math.round((profitCountLeft/50000)*1) + 60 + 'px';
    
    columnRight.style.height = Math.round((profitCountRight/50000)*1) + 60 + 'px';
    });
    
    // Изменение высоты столбцов
    
    columnLeft.style.height = Math.round((profitCountLeft/50000)*1) + 60 + 'px';
    
    columnRight.style.height = Math.round((profitCountRight/50000)*1) + 60 + 'px';
    
}

calculateProfit();

// slider-1

 let sliderElem = document.getElementById('slider-months');
 let thumbElem = sliderElem.children[0];

 
    thumbElem.onmousedown = function(e) {
      let thumbCoords = getCoords(thumbElem);
      let shiftX = e.pageX - thumbCoords.left;
      let sliderCoords = getCoords(sliderElem);

      document.onmousemove = function(e) {
        
        let newLeft = e.pageX - shiftX - sliderCoords.left;

        // курсор ушёл вне слайдера
        if (newLeft < 0) {
          newLeft = 0;
        }
        let rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }

        thumbElem.style.left = newLeft + 'px';
          
          // изменение колличества месяцев
          let count;
          count = Math.round(thumbElem.offsetLeft/7.5)*1;
          if (count === 0) {
              count = 1;
          }
          document.querySelector('.change-params').innerHTML = count;
          months = count;
          
          // изменение позиции фона-градиента на слайдере
          let gradientCount;
          gradientCount = 100 - (count*100)/36;
          sliderElem.style.backgroundPosition = gradientCount + '% 0';  
          
          calculateProfit();
    }
          
      document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
      };

      return false; 
    };

    thumbElem.ondragstart = function() {
      return false;
    };

    function getCoords(elem) { 
      let box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };

 }


// slider-2


 let sliderElemSum = document.getElementById('slider-sum');
 let thumbElemSum = sliderElemSum.children[0];
 
    thumbElemSum.onmousedown = function(e) {
      let thumbCoords = getCoords(thumbElemSum);
      let shiftX = e.pageX - thumbCoords.left;
      let sliderCoords = getCoords(sliderElemSum);

      document.onmousemove = function(e) {
        
        let newLeft = e.pageX - shiftX - sliderCoords.left;

        // курсор ушёл вне слайдера
        if (newLeft < 0) {
          newLeft = 0;
        }
        let rightEdge = sliderElemSum.offsetWidth - thumbElemSum.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }

        thumbElemSum.style.left = newLeft + 'px';
          
          
          // изменение суммы по движению бегунка
          let count;
          count = Math.round(thumbElemSum.offsetLeft/6.8)*100000;
          if (count === 0) {
              count = 100000;
          }
          sum = count;
          document.querySelector('.change-params-sum').innerHTML = count.toLocaleString();
          
          // изменение позиции фона-градиента на слайдере
          let gradientCount;
          gradientCount = 100 - (count*100)/4000000;
          sliderElemSum.style.backgroundPosition = gradientCount + '% 0'; 
          
          calculateProfit();
    }
          
      document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
      };

      return false; 
    };

    thumbElemSum.ondragstart = function() {
      return false;
    };

    function getCoords(elem) { 
      let box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };

 }
















    