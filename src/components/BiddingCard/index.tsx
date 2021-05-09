import { FC, useState } from 'react';
import './index.scss'

interface FormDataObject {
    "bidAmount": string,
    "priceType": "Fixed" | "Negotiable",
    "mobile": string,
    "name": string,
    "remarks": string,
}

interface IBiddingCard {
    "onChange": Function,
    "formData": FormDataObject
}

let amountChars = 0;
export const BiddingCard: FC<IBiddingCard> = ({ onChange, formData }) => {
    const [width, setWidth] = useState(40)
    const [focusedInput, setFocusedInput] = useState("mobile")
    const { priceType, mobile, name, remarks } = formData;

    return <div id="biddingCard">
        <div className="biddingCardHeader">
            <div className="biddingCardHeaderTitle">Place Your Load BID</div>
            <div className="divider" />
            <div className="biddingCardAmount">
                <div className="biddingCardAmountSymbol">₹</div>
                <input
                    className="biddingCardAmountContent"
                    placeholder="0"
                    style={{
                        width,
                        maxWidth: "70vw"
                    }}
                    onChange={(e) => {
                        const amount = e.currentTarget.value;
                        onChange("bidAmount", amount)
                        let newWidth = width;
                        if (amount.length > amountChars) {
                            newWidth = newWidth + 25;
                            amountChars = amountChars + 1;
                        } else {
                            newWidth = newWidth - 25;
                            amountChars = amountChars > 0 ? amountChars - 1 : 0;
                        }
                        setWidth(newWidth)
                    }} />
            </div>
            <div className="biddingCardHeaderActions">
                <div onClick={(e) => onChange("priceType", "Fixed")} className={priceType === "Fixed" ? "biddingCardHeaderActionsActive" : "biddingCardHeaderActionsInactive"}>Fixed Price</div>
                <div onClick={(e) => onChange("priceType", "Negotiable")} className={priceType === "Negotiable" ? "biddingCardHeaderActionsActive" : "biddingCardHeaderActionsInactive"}>Rate Negiotable</div>
            </div>
        </div>
        <div className="biddingCardHorizontalLine" />
        <div className="biddingCardForm">
            <div onFocus={() => setFocusedInput("mobile")} onBlur={() => setFocusedInput("")} className={focusedInput === "mobile" ? "activeInput" : "inactiveInput"}>
                <div>+91 - </div>
                <input type="number" onChange={(e) => onChange("mobile", e.currentTarget.value)} />
                <div style={{ top: -10 }} className="bcfiPlaceholder">Enter your mobile number*</div>
            </div>
            <div onFocus={() => setFocusedInput("name")} onBlur={() => setFocusedInput("")} className={focusedInput === "name" ? "activeInput" : "inactiveInput"}>
                <input onChange={(e) => onChange("name", e.currentTarget.value)} />
                <div style={name.length > 0 ? { top: -10 } : {}} className="bcfiPlaceholder">Enter your name*</div>
            </div>
            <div onFocus={() => setFocusedInput("remarks")} onBlur={() => setFocusedInput("")} className={focusedInput === "remarks" ? "activeInput" : "inactiveInput"}>
                <input onChange={(e) => onChange("remarks", e.currentTarget.value)} />
                <div style={remarks.length > 0 ? { top: -10 } : {}} className="bcfiPlaceholder">Enter Remarks (optional)</div>
            </div>
        </div>
    </div>
}