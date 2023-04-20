import { AppointmentsProps } from 'common/interface/AppointmentsProps';
import { StatusAppointmentsProps } from 'common/interface/StatusAppointmentsProps';

export type UseTableAppointments = {
    getStatus: (status: StatusAppointmentsProps) => string;
    appointments: AppointmentsProps[]
}
