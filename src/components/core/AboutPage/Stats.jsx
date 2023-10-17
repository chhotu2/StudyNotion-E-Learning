import React from 'react'

const Stats = [
    { count: "5K", label: "Active Students" },
    { count: "10+", label: "Mentors" },
    { count: "200+", label: "Courses" },
    { count: "50+", label: "Awards" },

];

const StatsComponents = () => {
    return (
        <section>
            <div>
                <div className='flex justify-evenly'>
                    {
                        Stats.map((data, index) => {
                            return (
                                <div key={index}>

                                    <h1 className='text-center text-white font-bold'>
                                        {data.count}
                                    </h1>
                                    <h2>{data.label}</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default StatsComponents
