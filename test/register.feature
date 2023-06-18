Feature: Register
  Bot should allow registering new participant

  Scenario: Register a user
    When I start registering
    Then Bot says '#provideLanguage'
    When I say 'ru'
    Then Bot says '#provideName'
    When I say 'Ivan Ivanov'
    Then Bot says '#provideAccount'
    When I say 'i.ivanov'
    Then Bot says '#userRegistered'
    And There is user 'Ivan Ivanov' with account 'i.ivanov' registered

  Scenario: Register with wrong code
    When I start registering with wrong code
    Then Bot says '#accessRestricted'

  Scenario: Register when already registered
    And I have user registered
    When I start registering
    Then Bot says '#alreadyRegistered'

