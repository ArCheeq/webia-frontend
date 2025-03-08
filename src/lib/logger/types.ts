// loggerTypes.ts

export enum LogLevel {
    DEBUG = 'DEBUG',
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
}

export interface LogMessage {
    level: LogLevel;
    message: any[];
    timestamp: string;
    context: string;
}
