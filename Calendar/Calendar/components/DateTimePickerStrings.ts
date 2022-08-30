import { defaultCalendarStrings, ICalendarStrings } from '@fluentui/react';

/**
 * Defines the labels of the DatePicker control (as months, days, etc.)
 */
export async function DateTimePickerStrings(locale: string): Promise<ICalendarStrings> {
    return new Promise((resolve, reject) => {
        (async () => {
            try {
                const strings =
                    locale.length > 2
                        ? await import(`../loc/${locale}.ts`)
                        : await import(`../loc/${locale}-${locale}.ts`);
                const months: string[] = [
                    strings.DatePickerMonthLongJanuary,
                    strings.DatePickerMonthLongFebruary,
                    strings.DatePickerMonthLongMarch,
                    strings.DatePickerMonthLongApril,
                    strings.DatePickerMonthLongMay,
                    strings.DatePickerMonthLongJune,
                    strings.DatePickerMonthLongJuly,
                    strings.DatePickerMonthLongAugust,
                    strings.DatePickerMonthLongSeptember,
                    strings.DatePickerMonthLongOctober,
                    strings.DatePickerMonthLongNovember,
                    strings.DatePickerMonthLongDecember,
                ];

                /**
                 * An array of strings for the short names of months.
                 * The array is 0-based, so shortMonths[0] should be the short name of January.
                 */
                const shortMonths: string[] = [
                    strings.DatePickerMonthShortJanuary,
                    strings.DatePickerMonthShortFebruary,
                    strings.DatePickerMonthShortMarch,
                    strings.DatePickerMonthShortApril,
                    strings.DatePickerMonthShortMay,
                    strings.DatePickerMonthShortJune,
                    strings.DatePickerMonthShortJuly,
                    strings.DatePickerMonthShortAugust,
                    strings.DatePickerMonthShortSeptember,
                    strings.DatePickerMonthShortOctober,
                    strings.DatePickerMonthShortNovember,
                    strings.DatePickerMonthShortDecember,
                ];

                /**
                 * An array of strings for the full names of days of the week.
                 * The array is 0-based, so days[0] should be the full name of Sunday.
                 */
                const days: string[] = [
                    strings.DatePickerDayLongSunday,
                    strings.DatePickerDayLongMonday,
                    strings.DatePickerDayLongTuesday,
                    strings.DatePickerDayLongWednesday,
                    strings.DatePickerDayLongThursday,
                    strings.DatePickerDayLongFriday,
                    strings.DatePickerDayLongSaturday,
                ];

                /**
                 * An array of strings for the initials of the days of the week.
                 * The array is 0-based, so days[0] should be the initial of Sunday.
                 */
                const shortDays: string[] = [
                    strings.DatePickerDayShortSunday,
                    strings.DatePickerDayShortMonday,
                    strings.DatePickerDayShortTuesday,
                    strings.DatePickerDayShortWednesday,
                    strings.DatePickerDayShortThursday,
                    strings.DatePickerDayShortFriday,
                    strings.DatePickerDayShortSaturday,
                ];

                /**
                 * String to render for button to direct the user to today's date.
                 */
                const goToToday: string = strings.DatePickerGoToToday;
                /**
                 * Error message to render for TextField if isRequired validation fails.
                 */
                const isRequiredErrorMessage: string = strings.DatePickerIsRequiredErrorMessage;
                /**
                 * Error message to render for TextField if input date string parsing fails.
                 */
                const invalidInputErrorMessage: string = strings.DatePickerInvalidInputErrorMessage;
                /**
                 * Error message to render for TextField if date boundary (minDate, maxDate) validation fails.
                 */
                const isOutOfBoundsErrorMessage: string = strings.DatePickerIsOutOfBoundsErrorMessage;
                /**
                 * Label for the date selector.
                 */
                const dateLabel: string = strings.DateTimePickerDate;
                /**
                 * Label for the time of day selector.
                 */
                const timeLabel: string = strings.DateTimePickerTime;
                /**
                 * Separator between time of day components (hours, minutes, seconds).
                 */
                const timeSeparator: string = strings.DateTimePickerTimeSeparator;
                /**
                 * error message when text is entered in the date picker
                 */
                const textErrorMessage = strings.DateTimePickerTextErrorMessage;

                resolve({
                    months,
                    shortMonths,
                    days,
                    shortDays,
                    goToToday,
                    isRequiredErrorMessage,
                    invalidInputErrorMessage,
                    isOutOfBoundsErrorMessage,
                    dateLabel,
                    timeLabel,
                    timeSeparator,
                    textErrorMessage,
                } as ICalendarStrings);
            } catch (ex) {
                reject(defaultCalendarStrings);
                console.error('Cannot translate date strings', ex);
            }
        })();
    });
}
