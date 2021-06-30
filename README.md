# Khmer Date

គឺជា Plugin ដែលបង្កើតសម្រាប់ប្ដូរកាលបរិច្ឆេទទៅជាទម្រង់ខ្មែរ និង លេខជាភាសាខ្មែរ

Khmer Date is plugin help you to convert date time and number to Khmer date time format and number to Khmer number

## របៀបដំឡើង Installation

`npm i khmerdate --save`

## ចំណាំ Note

ទម្រង់កាលបរិច្ឆេទ ឧទាហរណ៍ៈ "2021-06-29T23:07:08" ទាញចេញពី API

## របៀបប្រើប្រាស់ Usage
~~~javascript
import { khmerDate, khmerNumber } from 'khmerdate';

console.log(khmerDate("2021-06-29T23:07:08","dddd dd mmm yyyy"));
// result: "អង្គារ៍ ២៩ មិថុនា ២០២១"
console.log(khmerDate("2021-06-29T23:07:08","dd-mm-yyyy"));
// result: "២៩-០៦-២០២១"
console.log(khmerDate("2021-06-29T23:07:08","ម៉ោង hr"));
// result: "ម៉ោង ១១:០៧ ល្ងាច"
console.log(khmerDate("2021-06-29T23:07:08","ថ្ងៃdddd ទីdd ខែmmmm ឆ្នាំyyyy ម៉ោងhr"));
// result: "ថ្ងៃអង្គារ៍ ទី២៩ ខែមិថុនា ឆ្នាំ២០២១ ម៉ោង១១:០៧ ល្ងាច"
console.log(khmerDate("2021-06-29T23:07:08","dd-mmm-yyyy"));
// result: "២៩-មិថុនា-២០២១"
console.log(khmerDate("2021-06-29T23:07:08","dd/mm/yy"));
// result: "២៩/០៦/២១"
console.log(khmerDate("2021-06-29T23:07:08","ddd/mmm/yyyy"));
// result: "អង្គ/មិថុនា/២០២១"
console.log(khmerNumber("0123456789 work..."));
// result: "០១២៣៤៥៦៧៨៩ work..."
~~~


## អ្នកបង្កើត
លោក ហ៊ិន រដ្ឋា
ជំនាញ បង្កើតកម្មវិធីទូរស័ព្ទ
បទពិសោធន៍ Flutter, ReactNative
ទូរស័ព្ទ 096 659 2250