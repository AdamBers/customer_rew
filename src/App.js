import React, { useState } from 'react'
import SubReason from './SubReason'

function App() {
  const [value1, setValue1] = useState(1)
  const [isChecked, setIsChecked] = useState([false, false, false, false])

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

  return (
    <div className="App">
      <div className="header">
        <h1>Мобильным приложением CompanyName Онлайн легко пользоваться?</h1>
        <h3>(где 1-абсолютно не согласен, a 10-абсолютно согласен)</h3>
        <form action="">
          <input
            type="range"
            className='slider'
            id="volume"
            name="rng"
            value={value1}
            min="0"
            max="7"
            step="1"
            onChange={(event) => setValue1(event.target.value)}
          />
          <div className='total'>{value1}</div>
        </form>
        {value1 > 0 &&
          <div className='details_1'>
            <h2>Уточните, какой именно функционал требует улучшений в интернет-банке?</h2>
            <h3>(возможно несколько вариантов)</h3>
            {reasons.map((reason, index) => {
              return (
                <div className='reasons' key={index}>
                  <div className='reasons_checkboxes'>
                    <input type="checkbox" id={index} name={index} checked={isChecked[index]} onChange={(event) => handleChange(event)} />
                    <label htmlFor={index}>{reason.name}</label>
                  </div>
                  <div className='sub_reasons'>
                    {isChecked[index] && reasons[index].reasonDescr.map((item, i) => {
                      return (
                        <SubReason item={item} i={i} key={i} />
                      )
                    })}
                  </div>
                </div>
              )
            })}
            <button className='send_button'>Отправить</button>
          </div>}
      </div>
    </div >
  );
}

export default App;
