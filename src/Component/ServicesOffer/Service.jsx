import React from 'react'
import { AccountingBookkeeping, AuditAssurance, BusinessAdvisory, cfo, PayrollServices, RFP, TaxServices } from '../../assets/data/virtualCFOServices'
import Services from '../Services/Services'

const Service = () => {
    cfo
    const services =[
        { title: "Virtual CFO Services", data: cfo, },
        { title: "Retirement & Financial Planning", data: RFP,},
        { title: "Payroll Services", data: PayrollServices, },
        { title: "Business Advisory", data: BusinessAdvisory,  },
        { title: "Audit & Assurance", data: AuditAssurance, },
        { title: "Accounting & Bookkeeping", data: AccountingBookkeeping, },
        { title: "Tax Services", data: TaxServices,  }
    ]
  return (
    <div>
      {services.map((item,index)=><Services item={item}  key={index} />)}
    </div>
  )
}

export default Service
