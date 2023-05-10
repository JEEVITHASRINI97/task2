import { useState } from 'react';
import { ColorBox } from './ColorBox';

export function Addcolor() {
  const [color, setColor] = useState("skyblue");
  const [colorList, setcolorList] = useState(["yellow", "blue", "green"]);
  // const color = "red";
  const Styles = {
    backgroundColor: color,
  };

  return (
    <div>
      <input style={Styles} type="text" onChange={(event) => setColor(event.target.value)}
        value={color}></input>
      <button onClick={() => setcolorList([...colorList, color])}>Add Color</button>
      {colorList.map((clr) => <ColorBox color={clr} />
      )}

    </div>

  );

}
