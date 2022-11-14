import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
  return (
    <section style={{
      background: `url(${appointment})`
    }} className='flex justify-center items-center'>
        <div className='flex-1 hidden lg:block'>
            <img className='mt-[-100px]' src={doctor} alt="" />
        </div>
        <div className='flex-1'>
          <h3 className='text-xl text-primary font-bold'>Appointment</h3>
          <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
          <p className='text-white'>Just like any business, your medical office should not waste valuable time or spend money on ineffective marketing tactics. Why manually contact patients when you may just be ignored? Medical and dental appointment reminder text messages cut down on phone time and lower your overhead.Overbooking can lead to patient dissatisfaction. Leaving unfilled openings, on the other hand, can have a serious effect on productivity and revenue. Want to find out just how much money your practice can be losing due to no-shows? </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
    </section>
  )
}

export default MakeAppointment