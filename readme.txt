export function formValidator(input: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        if (control.value > 10) {
            return {'invalid': {value: control.value}}
        }
        return null;
    };
}



let x = new FormGroup({
    name: new FormControl('',[])
})

this.fb.group({
    name: ['', Val]
})

Dynamic Forms:
import { FormBuilder } from '@angular/forms';


get subjectsData() {
    this.x.get('subjects') as FormArray;
}
x: Form;

constructor(private fb: FormBuilder) {

}

ngOnInit() {
     x = this.fb.group({
         name: [''],
         subjects: this.fb.array([
             this.fb.control('')
         ])
     })
}

addSubject() {
    this.subjectData.push(this.x.control(''));
}

<div formArrayName="subjects">
  <div *ngFor="let subject of subjectsData.conrols">
  </div>
</div>
