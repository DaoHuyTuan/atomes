import { format as fnsFormat } from 'date-fns'
import numeral from 'numeral'
import { DATE_FORMAT, NUMBER_FORMAT } from './contants'
type DATE_FORMAT_OPTIONS = {}

const formatDate = (
  date: Date | number,
  format: string = DATE_FORMAT.DEFAULT_HOURS,
  options?: DATE_FORMAT_OPTIONS
): string => {
  return fnsFormat(date, format, options)
}

const formatNumber = (
  num: string | number,
  format: string = NUMBER_FORMAT.DEFAULT
): string => {
  return numeral(num).format(format)
}
export { formatDate, formatNumber }
