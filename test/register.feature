Feature: Register
  Bot should allow registering new participant

  Scenario: Register to a section
    Given I have 'section1' section with 'admin1' admin
    When I start registering
    Then Bot says '#provideName'
    When I say 'Ivan Ivanov'
    Then Bot says '#provideAccount'
    When I say 'i.ivanov'
    Then Bot says '#userRegistered section1'
    And There is user 'Ivan Ivanov' with account 'i.ivanov' registered to 'section1'


  Scenario: Register to a second section
    Given I have 'section1' section with 'admin1' admin
    And I have 'section2' section with 'admin2' admin
    When I start registering
    Then Bot gives a menu '#whichSection'
      | sectionName | command       |
      | 'section1'  | /registerTo 1 |
      | 'section2'  | /registerTo 2 |
    When I say '/registerTo 2'
    Then Bot says '#provideName'
    When I say 'Ivan Ivanov'
    Then Bot says '#provideAccount'
    When I say 'i.ivanov'
    Then Bot says '#userRegistered'
    And There is user 'Ivan Ivanov' with account 'i.ivanov' registered to 'section2'

    Scenario: Register to a section
    Given I have 'section1' section with 'admin1' admin
    When I start registering
    Then Bot says '#provideName'
    When I say 'Ivan Ivanov'
    Then Bot says '#provideAccount'
    When I say 'i.ivanov'
    Then Bot says '#userRegistered section1'
    And There is user 'Ivan Ivanov' with account 'i.ivanov' registered to 'section1'


  Scenario: Register with wrong code
    When I start registering with wrong code
    Then Bot says '#accessRestricted'
    When I say 'Ivan Ivanov'
    Then Bot says '#provideAccount'
    When I say 'i.ivanov'
    Then Bot says '#userRegistered'
    And There is user 'Ivan Ivanov' with account 'i.ivanov' registered to 'section2'