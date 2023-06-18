# Feature: Register
#     Bot should allow registering new participant

#     Given I have 'section1' section with 'admin1' admin

#     Then Bot gives a menu '#whichSection'
#       | sectionName | command       |
#       | 'section1'  | /registerTo 1 |
#       | 'section2'  | /registerTo 2 |

#   Scenario: Enter another section
#     Given I have 'section1' section with 'admin1' admin
#     And I have 'section2' section with 'admin2' admin
#     And I have user registered to 'section1'
#     When I say '/enterSection'
#     Then Bot gives a menu '#whichSection'
#       | sectionName | command   |
#       | 'section2'  | /joinTo 1 |
#     When I say '/joinTo 1'