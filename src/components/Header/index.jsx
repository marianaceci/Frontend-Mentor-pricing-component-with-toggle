import { HeaderStyle, SwitchContainer } from "./style";

export default function Header({clickTransformStyle, clickSwitchButton, pressKeyButton}) {
   
  return (
    <HeaderStyle>
      <h1>Our Pricing</h1>
      <div className="switcher">
        <p>Annually</p>
        <SwitchContainer>
          <button
            style={{transform: `${clickTransformStyle}`}}
            onClick={clickSwitchButton}
            onKeyDown={pressKeyButton}
          ></button>
        </SwitchContainer>
        <p>Monthly</p>
      </div>
    </HeaderStyle>
  );
}
