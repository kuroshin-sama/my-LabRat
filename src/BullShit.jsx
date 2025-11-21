import { useState } from "react"

function BullShit () {
    const [text1, settext1] = useState ("یکم انیمیشن کار کردم")
    const [text2, settext2] = useState ("هنوز کلی چیز میز باید یاد بگیرم")
    return(
        <div class="glass-card">
        <div class="bullshit">
          <div class="box" onClick={() => settext1(text1==='یکم انیمیشن کار کردم'?'به جان خودت':'یکم انیمیشن کار کردم')}>
            {text1}
          </div>
          <div class="box" onClick={() => settext2(text2==='هنوز کلی چیز میز باید یاد بگیرم'?'ارواح عمت':'هنوز کلی چیز میز باید یاد بگیرم')}>
            {text2}
          </div>
        </div>
      </div>
    )
}
export default BullShit