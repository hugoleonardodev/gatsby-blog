import React from 'react'
import styled from 'styled-components'

type MyH2Props = {
    title: string
}

const myH2: React.FC<MyH2Props> = ({ children, title }) => {
    if (title) {
        return (
            <HeadingTwo>
                <h2>{children}</h2>
                <div className="underline"></div>
            </HeadingTwo>
        )
    }
    return (
        <h2
        // style={{
        //     margin: '2rem 0',
        //     color: 'var(--clr-grey-5)',
        // }}
        >
            {children}
        </h2>
    )
}
const HeadingTwo = styled.div`
    margin: 2rem 0;
    .underline {
        width: 5rem;
        height: 5px;
        background: var(--clr-primary-5);
    }
`
const myH3: React.FC = ({ children }) => {
    return (
        <h3
        // style={
        //     { margin: '2rem 0', color: 'var(--clr-primary-5)' }
        // }
        >
            {children}
        </h3>
    )
}

export { myH2, myH3 }
