import { TokenService } from 'src/app/Services/token.service';
import { DataUser } from './../../../../../Interfaces/data';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'],
})
export class NuevoUsuarioComponent implements OnInit {
  //Variable a utilizar para almacenar la respuesta de todos los registro del servidor en un array
  users!: User[];
  //Variables para controlar el comportamiento de los botones de forma dinamica
  actionB: string = 'Registrar';
  actionM: string = 'agregado';
  //Variable que permite acceder a cada uno de los atributos de la respuesta del servidor mediante la interfaz DataUser
  responseUser!: DataUser;
  //Variable que permite utilizar la clase FormGroup de los formularios
  newForm!: FormGroup;
  //Variable que permite interactuar de forma dinamica con el comportamiento de componente html enlazado a esta clase
  user: User | undefined;
  //Variable a utilizar para obtener el id proveniente de la url de la página
  idUser: number = 0;

  //Mediante el constructor se pueden injectar las dependencias necesarias para la incorporacion de cada metodo que pertenezca a la clase
  isAdmin: boolean = false;

  constructor(
    private fBuilder: FormBuilder,
    private router: Router,
    private userS: UserService,
    private aRouter: ActivatedRoute,
    private tokenS: TokenService
  ) {
    this.newForm = this.fBuilder.group({
      class: ['user'],
      idP: [''],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      user: ['', Validators.required],
      permisos: this.fBuilder.group({
        roles: [''],
      }),
    });

    this.idUser = +this.aRouter.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.update();
  }

  public update(): void {
    if (this.idUser !== 0) {
      this.actionB = 'Actualizar';

      this.userS.getUser(this.idUser).subscribe((res) => {
        this.user = res.responseUser;
        this.newForm.patchValue({
          name: this.user?.name,
          lastname: this.user?.lastname,
          phone: this.user?.phone,
          email: this.user?.email,

          user: this.user?.user,
          password: this.user?.password,
          roles: this.user?.roles.nameRol,
        });
      });
    }
  }

  public saveorupdate() {
    const role = this.tokenS.getAutorities();
    role.forEach((rol) => {
      if (rol === 'ROL_ADMINISTRATOR') {
        if (this.user == undefined) {
          const newUser = this.newForm.value;
          this.userS.saveUser(newUser).subscribe((res) => {
            this.user = res.responseUser;
            this.toast(this.user.name, this.actionM);
            this.router.navigateByUrl('/dashboard');
          });
        } else {
          const updateUser = this.newForm.value;
          this.userS.updateUser(this.idUser, updateUser).subscribe((resp) => {
            this.actionM = 'actualizado';
            this.toast(this.newForm.get('name')?.value, this.actionM);
            this.router.navigateByUrl('/dashboard');
          });
        }
      } else {
        this.toastE();
      }
    });
  }

  toast(name: string, action: string): void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: `Usuario ${name} ${action} exitosamente¡¡¡¡¡¡ `,
    });
  }

  toastE(): void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'error',
      title: `Permiso Denegado¡¡¡¡¡¡ `,
    });
  }
}
