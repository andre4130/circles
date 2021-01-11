import React, { useState, useEffect } from 'react';

const Circle = (props) => {

    const { text, brokenCounter, litCounter } = props;

    const [bool, setBool] = useState(
        {
            bool1: false,
            bool2: false,
            bool3: false,
            bool4: false,
            bool5: false,
            bool6: false,
            bool7: false,
            bool8: false,
        }
    )

    const [lit, setLit] = useState(
        {
            lit1: false,
            lit2: false,
            lit3: false,
            lit4: false,
            lit5: false,
            lit6: false,
            lit7: false,
            lit8: false,
        }
    )

    useEffect(() => {
        setBrokenIndicator();
        checkReset();
        setLitIndicator();
    }, [brokenCounter, litCounter])


    const checkReset = () => {
        if (litCounter === 0 && brokenCounter === 0) {
            setLit({
                lit1: false,
                lit2: false,
                lit3: false,
                lit4: false,
                lit5: false,
                lit6: false,
                lit7: false,
                lit8: false,
            });
            setBool({
                bool1: false,
                bool2: false,
                bool3: false,
                bool4: false,
                bool5: false,
                bool6: false,
                bool7: false,
                bool8: false,
            })
        };
    }

    const setBrokenIndicator = () => {
        for (let i = 1; i <= 8; i++) {
            var temp = 'bool' + i;
            if (brokenCounter >= i) {
                console.log(temp, 'true')
                setBool({ ...bool, [temp]: true });
            } 
        }
    }
    console.log(bool)

    const setLitIndicator = () => {
        for (let i = 1; i <= 8; i++) {
            let totalCounter = (brokenCounter + litCounter);
            if (totalCounter >= i) {
                let temp = 'lit' + i;
                setLit({ ...lit, [temp]: true })
            };
        }
    }

    const handleName = (e) => {
        e.preventDefault();
        alert(`Your Circle is called ${text}`)
    }

    const searchFunction = (e) => {
        e.preventDefault();
        alert(`You Clicked on the Search Function`)
    }

    const connectFunction = (e) => {
        e.preventDefault();
        alert(`You Clicked on the Connect Function`)
    }

    return (
        <div>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 188.8 188.8" style={{ 'height': '300px' }}>
                {/* CENTER ELEMENTS */}
                <g id="centro">
                    <g>
                        <a href="#" onClick={handleName}>
                            <path className="inner icons" d="M160.1,92c-1.3-35.1-30.2-63.3-65.7-63.3c-35.6,0-64.5,28.2-65.7,63.5l42.2,0c1.1-12,11.2-21.3,23.5-21.3
		c12.2,0,22.2,9.2,23.4,21L160.1,92z"/>
                        </a>


                    </g>
                    <a href="#" onClick={connectFunction}>
                        <path className="inner icons" d="M95.9,117.8c11.5-0.9,20.6-10.2,21.3-21.8l42.5,0c-0.8,34.8-29,63.3-64,64.1L95.9,117.8z" />
                    </a>
                    <a href="#"onClick={searchFunction}>
                        <path className="inner icons" d="M91.9,160.1c-34.7-1.1-62.5-29.4-63.5-63.8L70.9,96c0.7,11.5,9.7,20.8,21.2,21.7L91.9,160.1z" />
                    </a>
                </g>

                {/* CURVED TEXT AND GUIDE CURVE*/}
                <g>
                    <g >
                        <path className="st13" id="CURVEDTEXT" d="M51.9,91.5C53.3,69,71.8,54,94.6,54c22.8,0,41.3,14.7,42.7,37.1" />
                    </g>
                    <text style={{ 'cursor': 'pointer' }} text x="0" y="50" fontFamily="helvetica" fontSize="16" fill="ghostwhite" padding="3px">
                        <textPath alignmentBaseline="top" href="#CURVEDTEXT" startOffset="50%" textAnchor="middle">
                            {text}
                        </textPath>
                    </text>
                </g>

                {/* OUTER CIRCLE */}
                <g id="outer_circle">
                    <path className="outer" d="M94.4,0.7c-51.8,0-93.8,42-93.8,93.8c0,51.8,42,93.8,93.8,93.8s93.8-42,93.8-93.8
		C188.2,42.6,146.2,0.7,94.4,0.7z M94.4,165.2c-39.1,0-70.8-31.7-70.8-70.8s31.7-70.8,70.8-70.8s70.8,31.7,70.8,70.8
		S133.5,165.2,94.4,165.2z"/>
                </g>

                {/* LIT AND UNLIT INDICATORS */}
                <g id="indicators">
                    <path id="indicator1" className={lit.lit1 ? 'lit' : 'unlit'} d="M38.2,40.7C25.4,54.1,17.3,72.3,16.6,92.2H6.5c0.6-22.8,10-43.7,24.8-58.9L38.2,40.7z" />
                    <path id="indicator2" className={lit.lit2 ? 'lit' : 'unlit'} d="M92,16.8c-18.4,0.5-36.1,7.5-50.5,21l-7.2-7.2C50.7,15.2,71,7.2,91.9,6.7L92,16.8z" />
                    <path id="indicator3" className={lit.lit3 ? 'lit' : 'unlit'} d="M148.1,37.9c-13.4-12.7-32.6-20.7-51.6-21.3V6.5c22,0.6,43.6,9.7,58.8,24.2L148.1,37.9z" />
                    <path id="indicator4" className={lit.lit4 ? 'lit' : 'unlit'} d="M172.2,92.1c-0.5-18.4-8.4-37.8-21.4-51.7l7.1-7.2c15.1,16,23.9,37.9,24.5,58.8L172.2,92.1z" />
                    <path id="indicator5" className={lit.lit5 ? 'lit' : 'unlit'} d="M158.6,154.5c14.5-15.4,23.3-35.6,23.7-58.3l-10.2-0.1c-0.4,19.8-8.3,37.9-20.9,51.4L158.6,154.5z" />
                    <path id="indicator6" className={lit.lit6 ? 'lit' : 'unlit'} d="M96.2,171.4c18-0.5,37.9-7.5,52.4-21.5l7.1,7.3c-16.4,15.9-38.3,23.5-59.3,24.1L96.2,171.4z" />
                    <path id="indicator7" className={lit.lit7 ? 'lit' : 'unlit'} d="M40.9,149.8c13.6,12.9,30.9,21.1,51.1,21.6l0.1,9.9c-22.9-0.4-42.6-9.3-58-24L40.9,149.8z" />
                    <path id="indicator8" className={lit.lit8 ? 'lit' : 'unlit'} d="M16.6,96.2c0.4,20,8.4,37.8,21.1,51.4l-7.3,7.1C15.9,139.3,6.9,119,6.5,96.2L16.6,96.2z" />
                </g>

                {/* BROKEN INDICATORS */}
                <g id="indicators_broken">
                    <g id="broken1" className={bool.bool1 ? 'on' : 'off'}>
                        <path className="st8" d="M38.2,40.7l-6.9-7.5c-5.2,5.4-9.8,11.5-13.5,18.1c-4.1,0.8-7.1,4.4-7.1,8.7c0,1.6,0.4,3,1.1,4.3
			c-3.1,8.6-5,17.9-5.3,27.6l10.2-0.1C17,83.8,18.5,76,21,68.8c4.2-0.7,7.4-4.3,7.4-8.7c0-1.7-0.5-3.2-1.3-4.6
			C30.2,50.1,34,45.2,38.2,40.7z"/>
                        <polygon className="st12" points="23.6,62.3 20.8,59.5 23.5,56.7 22.7,55.9 19.9,58.7 17.1,55.9 16.3,56.7 19.1,59.5 16.3,62.3 
			17.1,63.2 19.9,60.3 22.8,63.1 		"/>
                    </g>
                    <g id="broken2" className={bool.bool2 ? 'on' : 'off'}>
                        <path className="st8" d="M92.5,6.5c-8.8,0.2-17.3,1.7-25.3,4.3c-1.4-0.9-3.1-1.5-5-1.5c-4.5,0-8.2,3.2-9,7.4
			c-6.9,3.7-13.3,8.2-18.9,13.5l7,7.4c4.8-4.4,10.1-8.3,15.8-11.4c1.4,1,3.2,1.5,5,1.5c4.5,0,8.2-3.2,9-7.5
			c6.7-2.1,13.8-3.3,21.2-3.5L92.5,6.5z"/>
                        <polygon className="st12" points="65.6,21.3 62.8,18.5 65.5,15.7 64.7,14.9 61.9,17.7 59.1,14.9 58.3,15.7 61.1,18.5 58.3,21.3 
			59.1,22.2 61.9,19.3 64.8,22.1 		"/>
                    </g>
                    <g id="broken3" className={bool.bool3 ? 'on' : 'off'}>
                        <path className="st8" d="M155,30.6c-6.4-6.1-13.4-11-20.9-14.8c-0.4-1.7-1.2-3.3-2.5-4.6c-3.1-3.1-8-3.5-11.6-1.1
			c-7.5-2.3-15.2-3.6-22.9-3.8l-0.2,10.2c6.5,0.2,13,1.3,19.3,3.1c0.3,1.7,1.2,3.3,2.5,4.6c3.2,3.2,8.1,3.5,11.7,1.1
			c6.2,3.3,12.1,7.4,17.4,12.5L155,30.6z"/>
                        <polygon className="st12" points="122,21.2 121.2,20.3 124,17.5 121.2,14.7 122,13.9 124.9,16.7 127.6,13.9 128.4,14.7 125.7,17.5 
			128.5,20.3 127.7,21.1 124.9,18.3 		"/>
                    </g>
                    <g id="broken4" className={bool.bool4 ? 'on' : 'off'}>
                        <path className="st8" d="M182.4,91.7c-0.2-8.8-1.7-17.3-4.3-25.3c0.9-1.4,1.5-3.1,1.5-5c0-4.5-3.2-8.2-7.4-9
			c-3.7-6.9-8.2-13.3-13.5-18.9l-7.4,7c4.4,4.8,8.3,10.1,11.4,15.8c-1,1.4-1.5,3.2-1.5,5c0,4.5,3.2,8.2,7.5,9
			c2.1,6.7,3.3,13.8,3.5,21.2L182.4,91.7z"/>
                        <polygon className="st12" points="174,63.9 171.2,61.1 173.9,58.3 173.1,57.5 170.3,60.2 167.5,57.5 166.7,58.3 169.5,61.1 166.7,63.9 
			167.5,64.8 170.3,61.9 173.2,64.7 		"/>
                    </g>
                    <g id="broken5" className={bool.bool5 ? 'on' : 'off'}>
                        <path className="st8" d="M158.2,154.1c6.1-6.4,11-13.4,14.8-20.9c1.7-0.4,3.3-1.2,4.6-2.5c3.1-3.1,3.5-8,1.1-11.6
			c2.3-7.5,3.6-15.4,3.8-23.1l-10.2,0c-0.2,6.5-1.3,13-3.1,19.3c-1.7,0.3-3.3,1.2-4.6,2.5c-3.2,3.2-3.5,8.1-1.1,11.7
			c-3.3,6.2-7.4,12.1-12.5,17.4L158.2,154.1z"/>
                        <polygon className="st12" points="175,126.8 172.2,124 174.9,121.2 174.1,120.4 171.3,123.2 168.5,120.4 167.7,121.2 170.5,124 
			167.7,126.9 168.5,127.7 171.4,124.8 174.2,127.7 		"/>
                    </g>
                    <g id="broken6" className={bool.bool6 ? 'on' : 'off'}>
                        <path className="st8" d="M96.5,181.9c8.8-0.3,18.1-2,26.1-4.7c1.4,0.9,3.1,1.4,5,1.4c4.5,0,8.1-3.2,8.9-7.5
			c6.9-3.7,13.2-8.3,18.8-13.7l-7.1-7.3c-4.7,4.5-10,8.4-15.8,11.6c-1.5-0.9-3.2-1.5-5.1-1.5c-4.5,0-8.2,3.3-8.9,7.6
			c-6.7,2.1-14.8,3.3-22.1,3.6L96.5,181.9z"/>
                        <polygon className="st12" points="131.5,172.3 128.6,169.5 131.3,166.7 130.5,165.9 127.8,168.6 124.9,165.9 124.1,166.7 127,169.5 
			124.2,172.4 125,173.2 127.8,170.3 130.7,173.1 		"/>
                    </g>
                    <g id="broken7" className={bool.bool7 ? 'on' : 'off'}>
                        <path className="st8" d="M33.7,157.7c6.4,6,13.5,10.9,21,14.7c0.4,1.7,1.2,3.3,2.5,4.5c3.2,3.1,8,3.5,11.6,1c7.5,2.2,15.2,3.4,23,3.6
			l0.2-10.2c-6.5-0.2-13-1.2-19.3-3c-0.4-1.7-1.2-3.3-2.5-4.6c-3.2-3.1-8.1-3.5-11.7-1c-6.2-3.2-12.2-7.3-17.5-12.4L33.7,157.7z"/>
                        <polygon className="st12" points="67.6,173.3 64.7,170.5 67.4,167.7 66.6,166.9 63.9,169.7 61,166.9 60.2,167.7 63.1,170.5 60.3,173.4 
			61.1,174.2 63.9,171.3 66.8,174.1 		"/>
                    </g>
                    <g id="broken8" className={bool.bool8 ? 'on' : 'off'}>
                        <path className="st8" d="M6.1,96.5c0.3,8.8,1.8,17.3,4.5,25.2c-0.9,1.4-1.4,3.1-1.4,5c0,4.5,3.2,8.1,7.5,8.9
			c3.7,6.9,8.3,13.2,13.7,18.8l7.3-7.1c-4.5-4.7-8.4-10-11.6-15.8c0.9-1.5,1.5-3.2,1.5-5.1c0-4.5-3.3-8.2-7.6-8.9
			c-2.1-6.7-3.4-13.8-3.7-21.1L6.1,96.5z"/>
                        <polygon className="st12" points="22.1,129.7 19.2,126.9 21.9,124.1 21.1,123.3 18.4,126.1 15.5,123.3 14.7,124.2 17.6,126.9 
			14.8,129.8 15.6,130.6 18.4,127.8 21.3,130.6 		"/>
                    </g>
                </g>

                {/* ICONS */}
                <g id="icons" className="icons">
                    <g transform="rotate(-45 -51.433 169.347)">
                        <g>
                            <path id="visit-arrow-b_12_" d="M105.8,252.8c5.5,0,10,4.5,10,10c0,5.5-4.5,10-10,10c-4.5,0-8.3-2.9-9.5-7l2.1,0
				c1.2,2.9,4.1,5,7.4,5c4.4,0,8-3.6,8-8s-3.6-8-8-8c-3.4,0-6.2,2.1-7.4,5l-2.1,0C97.5,255.7,101.3,252.8,105.8,252.8z M110.8,262.8
				l-9,5l2-3l-12-1c-0.6,0-1-0.4-1-1s0.4-1,1-1l12-1l-2-3L110.8,262.8z"/>
                        </g>
                        <g>
                            <path id="visit-arrow-b_1_" className="st12" d="M105.8,252.8c5.5,0,10,4.5,10,10c0,5.5-4.5,10-10,10c-4.5,0-8.3-2.9-9.5-7l2.1,0
				c1.2,2.9,4.1,5,7.4,5c4.4,0,8-3.6,8-8s-3.6-8-8-8c-3.4,0-6.2,2.1-7.4,5l-2.1,0C97.5,255.7,101.3,252.8,105.8,252.8z M110.8,262.8
				l-9,5l2-3l-12-1c-0.6,0-1-0.4-1-1s0.4-1,1-1l12-1l-2-3L110.8,262.8z"/>
                        </g>
                    </g>
                </g>
                <g id="icons" >

                    <g transform="translate(-24 -92)">
                        <g>
                            <path id="magnifier-b_12_" d="M92.5,221.2l3.4,2.7l-2.8,2.8l-2.8-3.3L92.5,221.2z M82.9,207.8c3.9,0,7,3.1,7,6.9
				c0,1.3-0.4,2.6-1,3.6L91,220l-1.9,1.9l-1.7-2c-1.2,1-2.8,1.6-4.5,1.6c-3.9,0-7-3.1-7-6.9S79.1,207.8,82.9,207.8z M82.9,209.7
				c-2.8,0-5,2.2-5,4.9s2.2,4.9,5,4.9s5-2.2,5-4.9S85.7,209.7,82.9,209.7z"/>
                        </g>
                        <g>
                            <path id="magnifier-b_1_" className="st12" d="M92.5,221.2l3.4,2.7l-2.8,2.8l-2.8-3.3L92.5,221.2z M82.9,207.8c3.9,0,7,3.1,7,6.9
				c0,1.3-0.4,2.6-1,3.6L91,220l-1.9,1.9l-1.7-2c-1.2,1-2.8,1.6-4.5,1.6c-3.9,0-7-3.1-7-6.9S79.1,207.8,82.9,207.8z M82.9,209.7
				c-2.8,0-5,2.2-5,4.9s2.2,4.9,5,4.9s5-2.2,5-4.9S85.7,209.7,82.9,209.7z"/>
                        </g>
                    </g>
                </g>
            </svg>

        </div >
    );
};

export default Circle;