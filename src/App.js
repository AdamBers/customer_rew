import React, { useState } from 'react'

function App() {
  const [value1, setValue1] = useState(0)
  const [isChecked, setIsChecked] = useState([false, false, false, false])
  const [active, setActive] = useState([1])

  const reasons = [
    {
      name: "Информация по вашим продуктам(счета, карты, вклады, кредиты и т.д.)",
      reasonDescr: ["readfsson1", "redfsdfason2", "reason3", "reason4", "reason5"]
    },
    {
      name: "Оплата услуг(ЖКХ, мобильная связь, интернет и т.д.)",
      reasonDescr: ["reason1", "readfasdson2", "redfaason3", "reason4"]
    },
    {
      name: "Переводы",
      reasonDescr: ["readfasdfson1", "reason2", "reason3", "reason4", "reason5", "reason6", "reason7"]
    },
    {
      name: "Другое",
      reasonDescr: ["reason1", "reason2"]
    },
  ]

  const handleChange = (e) => {
    let newArr = [...isChecked]
    newArr[e.target.id] = !newArr[e.target.id]
    setIsChecked(newArr)
  }

  const toggleClass = (e) => {
    let newArr = [...active]
    newArr = newArr.filter((item) => item !== e)
    console.log(newArr)
    setActive(newArr)
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Мобильным приложением CompanyName Онлайн легко пользоваться?</h1>
        <h3>(где 1-абсолютно не согласен, a 10-абсолютно согласен)</h3>
        <form action="">
          <input
            type="range"
            id="volume"
            name="rng"
            value={value1}
            min="0"
            max="10"
            step="1"
            onChange={(event) => setValue1(event.target.value)}
          />
        </form>
        {value1 > 0 &&
          <div className='details_1'>
            <h2>Уточните, какой именно функционал требует улучшений в интернет-банке?</h2>
            <h3>(возможно несколько вариантов)</h3>
            {reasons.map((reason, i) => {
              return (
                <div className='reasons' key={i}>
                  <div className='reasons_checkboxes'>
                    <input type="checkbox" id={i} name={i} checked={isChecked[i]} onChange={(event) => handleChange(event)} />
                    <label htmlFor={i}>{reason.name}</label>
                  </div>
                  <div className='sub_reasons'>
                    {isChecked[i] && reasons[i].reasonDescr.map((item, i) => {
                      return (
                        <span className={active.includes(i) ? "sub_reasons__items active" : "sub_reasons__items"} key={i} onClick={() => toggleClass(i)} >
                          {item}
                        </span>
                      )
                    })}
                  </div>

                </div>
              )
            })}
          </div>}
      </div>
    </div >
  );
}

export default App;
