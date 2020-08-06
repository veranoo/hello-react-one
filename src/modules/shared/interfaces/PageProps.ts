import { RouteComponentProps } from 'react-router-dom';

export type PageProps<T = {}> = RouteComponentProps<any> & { data?: T };
