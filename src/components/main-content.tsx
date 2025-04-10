import React from 'react'

type Props = {
    title: string,
    description: string,
    children: React.ReactNode,
    toolbar?: React.ReactNode
}

const MainContent = (props: Props) => {
    const { title, description, children, toolbar } = props
    return (
        <section className="space-y-6 p-4 pb-16">
            <div className="space-y-0.5 border-b border-slate-200 pb-4 flex flex-row justify-between items-center">
                <div>
                    <h2 className="text-2xl font-extrabold tracking-tight">{title}</h2>
                    <p className="text-muted-foreground">
                        {description}
                    </p>
                </div>
                {
                    toolbar &&
                    <div>
                        {toolbar}
                    </div>
                }
            </div>
            <div className='space-y-8 lg:space-y-0'>
                {children}
            </div>
        </section>
    )
}

export default MainContent